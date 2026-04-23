import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
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
      const { worker } = await import('./shared/api/mocks/browser');
      await worker.start({ onUnhandledRequest: 'bypass' });
    }
  } finally {
    // Разблокируем fetch-вызовы в API-слое — даже если MSW упал
    resolveMswReady();
  }
};

init();
