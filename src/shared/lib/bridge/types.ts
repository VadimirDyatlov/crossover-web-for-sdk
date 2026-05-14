// Типы протокола JS-Bridge. Вынесены отдельно, чтобы и ядро (bridge.ts),
// и трекер (tracker.ts), и потребители фич импортировали единый контракт.

export type BridgePlatform = 'ios' | 'android' | 'web';

// Сообщение, уходящее из веба в нативку.
export interface BridgeMessage<P = unknown> {
  id: number;
  event: string;
  payload: P;
  timestamp: number;
  // Выставляется только для request(): нативка обязана ответить с replyTo === id
  expectReply?: boolean;
}

// Сообщение, приходящее из нативки в веб.
export interface BridgeInboundMessage<P = unknown> {
  event: string;
  payload: P;
  // Если задано — это ответ на наш request() с соответствующим id
  replyTo?: number;
  error?: string;
}

export interface BridgeEmitOptions {
  // false — не буферизовать событие, если мост ещё не готов (по умолчанию буферизуем)
  buffer?: boolean;
}

// Колбэк подписчика на событие из нативки. Возвращаемое значение функции on() — отписка.
export type BridgeListener<P = unknown> = (payload: P) => void;
export type BridgeUnsubscribe = () => void;

// Полезная нагрузка любого пользовательского действия. Уходит в нативку
// единым событием 'user.action' — нативка уже разбирает по полю `action`.
export interface UserActionPayload {
  // Доменное имя действия: 'cart.add', 'navigation', 'support.call' и т.д.
  action: string;
  sessionId: string;
  url: string;
  // Произвольные доменные поля действия
  [key: string]: unknown;
}

// Глобальные хуки, которые нативка дёргает на window. Объявлены здесь,
// чтобы и bridge.ts, и нативная сторона ссылались на один контракт.
declare global {
  interface Window {
    // iOS: WKScriptMessageHandler с именем 'nativeBridge'
    webkit?: {
      messageHandlers?: {
        nativeBridge?: { postMessage: (json: string) => void };
      };
    };
    // Android: addJavascriptInterface(..., 'AndroidBridge')
    AndroidBridge?: { postMessage: (json: string) => void };
    // Нативка вызывает это, чтобы доставить сообщение в веб
    __nativeBridgeReceive?: (raw: string | BridgeInboundMessage) => void;
    // Нативка вызывает это, когда готова принимать сообщения — веб сбрасывает очередь
    __nativeBridgeReady?: () => void;
  }
}
