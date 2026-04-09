import { useShallow } from 'zustand/shallow';
import { useEffect } from 'react';
import { useCartStore } from '@/entities/cart';
import { useAppNavigation } from '@/shared/lib';

export const useCartAutoExit = () => {
  const productList = useCartStore(
    useShallow((state) => Object.values(state.productMap)),
  );
  const { goBack } = useAppNavigation();

  useEffect(() => {
    if (productList.length === 0) {
      goBack();
    }
  }, [productList.length, goBack]);
};
