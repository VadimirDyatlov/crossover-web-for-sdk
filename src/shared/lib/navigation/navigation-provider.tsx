import type { FC, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
// app/providers/NavigationProvider.tsx
import { useModalStore } from '@/shared/model';

export const NavigationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isPopStateNavigating = useRef(false);
  const { visibleModalName, closeModal } = useModalStore();

  useEffect(() => {
    if (visibleModalName) {
      window.history.pushState({ modal: visibleModalName }, '');
    }
  }, [visibleModalName]);

  useEffect(() => {
    const handlePopState = () => {
      if (visibleModalName) {
        closeModal();
        return;
      }

      if (!document.startViewTransition) return;

      isPopStateNavigating.current = true;

      document.documentElement.classList.add('back-transition');

      const transition = document.startViewTransition(() => {
        // one-shot zero-delay timeout to yield to the browser before the transition captures
        // eslint-disable-next-line react-web-api/no-leaked-timeout
        return new Promise((resolve) => setTimeout(resolve, 0));
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove('back-transition');
        isPopStateNavigating.current = false;
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [visibleModalName, closeModal]);

  return <>{children}</>;
};
