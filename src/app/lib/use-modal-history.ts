import { useEffect } from 'react';
import { useModalStore } from '@/shared/model';

export const useModalHistory = () => {
  const { visibleModalName, closeModal } = useModalStore();

  useEffect(() => {
    if (visibleModalName) {
      window.history.pushState({ modal: visibleModalName }, '');
    }
  }, [visibleModalName]);

  useEffect(() => {
    const handlePopState = () => {
      if (visibleModalName) closeModal();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [visibleModalName, closeModal]);
};
