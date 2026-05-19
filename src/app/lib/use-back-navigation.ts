import { useEffect } from 'react';
import { useModalStore } from '@/shared/model';

export const useBackNavigation = () => {
  const { visibleModalName } = useModalStore();

  useEffect(() => {
    if (visibleModalName) return;

    const handlePopState = () => {
      window.history.replaceState(
        {
          ...window.history.state,
          animate: 'slide-back',
        },
        '',
        window.location.href,
      );
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [visibleModalName]);
};
