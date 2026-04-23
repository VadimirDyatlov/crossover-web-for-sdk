import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import { resolveMswReady } from '@/shared/api/msw-ready';
import './index.css';

const init = async () => {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error('Global Error:', { message, source, lineno, colno, error });
  };

  window.onunhandledrejection = (event) => {
    console.error('Unhandled Rejection:', event.reason);

    if (
      event.reason?.name === 'ChunkLoadError' ||
      event.reason?.message?.includes('Loading chunk')
    ) {
      window.location.reload();
    }
  };

  // Монтируем React сразу — убирает HTML-спла́ш, показывает React-скелетоны
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

  try {
    // DEV — dev-сервер, VITE_ENABLE_MSW — явное включение для preview/тестирования
    if (import.meta.env.DEV || import.meta.env.VITE_ENABLE_MSW === 'true') {
      // Снимаем регистрацию старых SW перед стартом MSW: Lighthouse и другие инструменты
      // оставляют в activeClientIds «мёртвые» clientId, из-за которых SW виснет на
      // перехвате fetch и worker.start() никогда не получает MOCKING_ENABLED.
      // Чистая перерегистрация на каждой загрузке страницы исключает это состояние.
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((reg) => reg.unregister()));
      }

      const { worker } = await import('./shared/api/mocks/browser');
      // Таймаут — страховка: если SW застрял и worker.start() не резолвится,
      // через 5 с разблокируем приложение (fetch упадёт с ошибкой, не зависнет).
      await Promise.race([
        worker.start({ onUnhandledRequest: 'bypass' }),
        new Promise<void>((_, reject) =>
          setTimeout(() => reject(new Error('MSW start timeout')), 5000),
        ),
      ]);
    }
  } catch (e) {
    console.warn('[MSW] failed to start, proceeding without mocks:', e);
  } finally {
    // Разблокируем fetch-вызовы в API-слое — даже если MSW упал
    resolveMswReady();
  }
};

init();
