// app/providers/NavigationProvider.tsx
import { useModalStore } from '@/shared/model';
import { useEffect, useRef } from 'react';
import type { FC, ReactNode } from 'react';

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
        return new Promise((resolve) => setTimeout(resolve, 0));
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove('back-transition');
        isPopStateNavigating.current = false;
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [visibleModalName]);

  return <>{children}</>;
};
