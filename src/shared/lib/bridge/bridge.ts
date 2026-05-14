import type {
  BridgeEmitOptions,
  BridgeInboundMessage,
  BridgeListener,
  BridgeMessage,
  BridgePlatform,
  BridgeUnsubscribe,
} from './types';

// Сколько ждём ответ нативки на request(), прежде чем отклонить промис.
const REQUEST_TIMEOUT_MS = 10_000;

/**
 * Двусторонний мост между WebView и нативкой.
 *
 * Зачем класс, а не набор функций: нужно хранить состояние (очередь до готовности
 * нативки, незавершённые request-колбэки, подписки) в одном инкапсулированном месте.
 *
 * Транспорт выбирается автоматически по окружению; в обычном браузере (web)
 * сообщения просто логируются — это позволяет разрабатывать фичи без нативки.
 */
class NativeBridge {
  private readonly platform: BridgePlatform;
  // event -> подписчики на входящие из нативки события
  private readonly listeners = new Map<string, Set<BridgeListener>>();
  // id -> resolve/reject ожидающего ответа request()
  private readonly pendingRequests = new Map<
    number,
    { resolve: (value: unknown) => void; reject: (reason: Error) => void }
  >();

  // Буфер сообщений, накопленных пока нативка не подтвердила готовность
  private queue: BridgeMessage[] = [];
  private messageId = 0;
  private ready = false;

  constructor() {
    this.platform = this.detectPlatform();
    // Привязываем методы к window, чтобы нативка могла их дёрнуть напрямую.
    window.__nativeBridgeReceive = this.receiveFromNative.bind(this);
    window.__nativeBridgeReady = this.flush.bind(this);
    // В чистом браузере нативка никогда не вызовет __nativeBridgeReady,
    // поэтому считаем мост готовым сразу — иначе очередь копилась бы вечно.
    if (this.platform === 'web') this.ready = true;
  }

  private detectPlatform(): BridgePlatform {
    if (window.webkit?.messageHandlers?.nativeBridge) return 'ios';
    if (window.AndroidBridge) return 'android';
    return 'web';
  }

  /** Отправить событие в нативку без ожидания ответа. */
  emit(event: string, payload: unknown = {}, options: BridgeEmitOptions = {}): void {
    const message: BridgeMessage = {
      id: ++this.messageId,
      event,
      payload,
      timestamp: Date.now(),
    };

    // До готовности нативки буферизуем, чтобы не потерять ранние события
    // (WebView может прогрузиться раньше, чем нативка прицепит хендлер).
    if (!this.ready && options.buffer !== false) {
      this.queue.push(message);
      return;
    }

    this.send(message);
  }

  /**
   * Отправить событие и дождаться ответа нативки (например, запрос токена авторизации).
   * Промис отклоняется по таймауту, если нативка не ответит.
   */
  request<T = unknown>(event: string, payload: unknown = {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const id = ++this.messageId;

      // Таймаут — страховка от «зависшего» промиса, если нативка не ответит.
      const timer = setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          reject(new Error(`Native didn't reply to "${event}"`));
        }
      }, REQUEST_TIMEOUT_MS);

      this.pendingRequests.set(id, {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value as T);
        },
        reject: (reason) => {
          clearTimeout(timer);
          reject(reason);
        },
      });

      // request не буферизуем: ответа в web-режиме всё равно не будет,
      // а в нативке мост к моменту запроса данных обычно уже готов.
      this.send({ id, event, payload, timestamp: Date.now(), expectReply: true });
    });
  }

  /** Подписаться на событие из нативки. Возвращает функцию отписки. */
  on<P = unknown>(event: string, callback: BridgeListener<P>): BridgeUnsubscribe {
    let subs = this.listeners.get(event);
    if (!subs) {
      subs = new Set();
      this.listeners.set(event, subs);
    }
    subs.add(callback as BridgeListener);

    return () => {
      this.listeners.get(event)?.delete(callback as BridgeListener);
    };
  }

  private send(message: BridgeMessage): void {
    try {
      const json = JSON.stringify(message);
      switch (this.platform) {
        case 'ios':
          window.webkit!.messageHandlers!.nativeBridge!.postMessage(json);
          break;
        case 'android':
          window.AndroidBridge!.postMessage(json);
          break;
        case 'web':
          // В браузере нативки нет — логируем, чтобы фичи можно было отлаживать.
          // eslint-disable-next-line no-console
          console.log('[bridge → native]', message);
          break;
      }
    } catch (e) {
      // Ошибка сериализации/транспорта не должна ронять UI — мост best-effort.
      console.error('[bridge] send failed', e);
    }
  }

  /** Вызывается нативкой через window.__nativeBridgeReady — сбрасываем накопленную очередь. */
  private flush(): void {
    this.ready = true;
    const pending = this.queue;
    this.queue = [];
    for (const message of pending) this.send(message);
  }

  /** Вызывается нативкой через window.__nativeBridgeReceive — входящее сообщение. */
  private receiveFromNative(raw: string | BridgeInboundMessage): void {
    let msg: BridgeInboundMessage;
    try {
      msg = typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch {
      // Кривой JSON из нативки игнорируем молча — это не наш баг и падать UI не должен.
      return;
    }

    // Ответ на наш request(): резолвим/реджектим соответствующий промис.
    if (typeof msg.replyTo === 'number' && this.pendingRequests.has(msg.replyTo)) {
      const { resolve, reject } = this.pendingRequests.get(msg.replyTo)!;
      this.pendingRequests.delete(msg.replyTo);
      if (msg.error) reject(new Error(msg.error));
      else resolve(msg.payload);
      return;
    }

    // Обычное событие — раздаём подписчикам.
    const subs = this.listeners.get(msg.event);
    if (subs) {
      for (const cb of subs) cb(msg.payload);
    }
  }
}

// Единственный экземпляр на приложение — мост по своей природе синглтон
// (один WebView, один транспорт, одна очередь).
export const bridge = new NativeBridge();
