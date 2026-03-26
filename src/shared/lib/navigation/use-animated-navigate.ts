import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

// TODO: Как вариант использовать webviewkit
export const useAnimatedNavigate = () => {
  const navigate = useLocation()[1];
  const isTransitioning = useRef(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  return useCallback((to: string, direction: 'forward' | 'back' = 'forward') => {
    if (!isMounted.current) return;
    
    if (!document.startViewTransition) {
      navigate(to);
      return;
    }
    
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    if (direction === 'back') {
      document.documentElement.classList.add('back-transition');
    } else {
      document.documentElement.classList.add('forward-transition');
    }
    
    const transition = document.startViewTransition(async () => {
      navigate(to);
      await new Promise(resolve => setTimeout(resolve, 30));
    });
    
    transition.finished.finally(() => {
      document.documentElement.classList.remove('back-transition', 'forward-transition');
      isTransitioning.current = false;
    });
  }, [navigate]);
};