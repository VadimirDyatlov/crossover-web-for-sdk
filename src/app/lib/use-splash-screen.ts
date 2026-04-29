import { useEffect } from 'react';
import { useMerchantStore } from '@/entities/merchant';

export const useSplashScreen = () => {
  const isReady = useMerchantStore((state) => !!state.data);
  const error = useMerchantStore((state) => state.error);

  useEffect(() => {
    if (!isReady && !error) return;

    const splash = document.getElementById('splash');
    if (!splash) return;

    splash.style.opacity = '0';
    const timeoutId = setTimeout(() => splash.remove(), 150);

    return () => clearTimeout(timeoutId);
  }, [isReady, error]);
};
