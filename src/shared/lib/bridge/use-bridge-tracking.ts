import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { USER_ACTION } from './events';
import { tracker } from './tracker';

/**
 * Подключает трекинг к жизненному циклу приложения. Вызывается один раз
 * в AppProvider.
 *
 * Навигация трекается через wouter (useLocation), а не монки-патчем history:
 * роутинг в проекте идёт через wouter, и его хук — надёжный источник переходов.
 */
export function useBridgeTracking(): void {
  const [location] = useLocation();

  // Глобальные DOM-слушатели (клики/сабмиты/ошибки) — навешиваем однократно.
  useEffect(() => {
    tracker.init();
  }, []);

  // Каждый переход по роутеру — отдельное действие navigation.
  useEffect(() => {
    tracker.trackAction(USER_ACTION.NAVIGATION, { url: location });
  }, [location]);

  // Сворачивание/разворачивание WebView — нативке полезно для аналитики сессий.
  useEffect(() => {
    const handleVisibility = () => {
      tracker.trackAction(
        document.hidden
          ? USER_ACTION.APP_BACKGROUND
          : USER_ACTION.APP_FOREGROUND,
      );
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);
}
