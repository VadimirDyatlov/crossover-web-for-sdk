import { useMerchantLazy, useMerchantStore } from '@/entities/merchant';

export const useMerchantInit = () => {
  useMerchantLazy();

  const isReady = useMerchantStore((state) => !!state.data);
  const error = useMerchantStore((state) => state.error);

  return { isReady, error };
};
