import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from '@/app';
import './index.css';

const init = async () => {
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
