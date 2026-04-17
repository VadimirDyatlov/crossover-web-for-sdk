// app/providers/NavigationProvider.tsx
import { useEffect, useRef } from 'react';
import type { FC, ReactNode } from 'react';

export const NavigationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isPopStateNavigating = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
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
  }, []);

  return <>{children}</>;
};
