import { useEffect } from 'react';

export const useSplashScreen = (isReady: boolean, hasError: boolean) => {
  useEffect(() => {
    if (!isReady && !hasError) return;
    const splash = document.getElementById('splash');
    if (!splash) return;
    splash.style.opacity = '0';
    const t = setTimeout(() => splash.remove(), 150);
    return () => clearTimeout(t);
  }, [isReady, hasError]);
};
