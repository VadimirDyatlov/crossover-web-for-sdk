import type { UserActionName } from './events';
import type { UserActionPayload } from './types';
import { bridge } from './bridge';
import { BRIDGE_EVENT, USER_ACTION } from './events';

/**
 * Трекер пользовательских действий: единая точка, через которую любое действие
 * уходит в нативку событием 'user.action'.
 *
 * Делает две вещи:
 *  1. Декларативный трекинг через data-track-атрибуты — клики/сабмиты ловятся
 *     глобально, не нужно дёргать bridge вручную в каждом обработчике.
 *  2. Императивный trackAction() — для доменных действий из моделей фич
 *     (добавление в корзину, выбор категории), где DOM-атрибута недостаточно.
 *
 * Навигация и фон/передний план трекаются отдельно — через React-хук
 * useBridgeTracking, т.к. роутинг здесь на wouter, а не на голом history API.
 */
class UserActionTracker {
  // Идентификатор сессии WebView — позволяет нативке группировать действия.
  private readonly sessionId = crypto.randomUUID();
  private initialized = false;

  /** Навешивает глобальные DOM-слушатели. Идемпотентно — повторный вызов игнорируется. */
  init(): void {
    if (this.initialized) return;
    this.initialized = true;

    // capture: true — ловим действие даже если внутренний обработчик
    // вызовет stopPropagation (как делает, например, AddToCart).
    document.addEventListener('click', this.handleClick, { capture: true });
    document.addEventListener('submit', this.handleSubmit, { capture: true });
    window.addEventListener('error', this.handleError);
  }

  /** Императивно отправить доменное действие. Основной API для моделей фич. */
  trackAction(action: UserActionName, payload: Record<string, unknown> = {}): void {
    const data: UserActionPayload = {
      action,
      sessionId: this.sessionId,
      url: window.location.pathname,
      ...payload,
    };
    bridge.emit(BRIDGE_EVENT.USER_ACTION, data);
  }

  private handleClick = (e: MouseEvent): void => {
    const target = e.target as HTMLElement | null;
    const el = target?.closest<HTMLElement>('[data-track]');
    if (!el) return;

    this.trackAction(el.dataset.track as UserActionName, {
      ...this.parseDataset(el),
      text: el.textContent?.trim().slice(0, 100),
    });
  };

  private handleSubmit = (e: SubmitEvent): void => {
    const form = e.target as HTMLFormElement | null;
    if (!form?.dataset.track) return;

    this.trackAction(form.dataset.track as UserActionName, this.parseDataset(form));
  };

  private handleError = (e: ErrorEvent): void => {
    this.trackAction(USER_ACTION.ERROR_JS, {
      message: e.message,
      source: e.filename,
      line: e.lineno,
    });
  };

  /**
   * Превращает data-track-* атрибуты в payload:
   * data-track-product-id="42" -> { productId: '42' }
   * Сам data-track исключается — это имя действия, а не его поле.
   */
  private parseDataset(el: HTMLElement): Record<string, string> {
    const out: Record<string, string> = {};
    for (const [key, value] of Object.entries(el.dataset)) {
      if (key === 'track' || value === undefined) continue;
      // dataset уже camelCase: 'trackProductId' -> 'productId'
      if (key.startsWith('track')) {
        const field = key.charAt(5).toLowerCase() + key.slice(6);
        out[field] = value;
      }
    }
    return out;
  }
}

export const tracker = new UserActionTracker();

// Короткий хелпер для импорта в моделях фич без обращения к классу.
export const trackAction = tracker.trackAction.bind(tracker);
