import { useEffect } from 'react';
import { useModalStore } from '@/shared/model';

export const useBackNavigation = () => {
  const { visibleModalName } = useModalStore();

  useEffect(() => {
    let timeoutId: number;

    const handlePopState = () => {
      if (visibleModalName || !document.startViewTransition) return;

      document.documentElement.classList.add('back-transition');

      const transition = document.startViewTransition(() => {
        return new Promise((resolve) => {
          timeoutId = setTimeout(resolve, 0);
        });
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove('back-transition');
      });
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [visibleModalName]);
};
