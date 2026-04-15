import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from '@/app';
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

  if (import.meta.env.MODE) {
    const { worker } = await import('./shared/api/mocks/browser');

    await worker.start({ onUnhandledRequest: 'bypass' });
  }

  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

init();
