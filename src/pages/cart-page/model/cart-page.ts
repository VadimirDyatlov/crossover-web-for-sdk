import { useShallow } from 'zustand/shallow';
import { useEffect } from 'react';
import { useCartStore } from '@/entities/cart';
import { useAppNavigation } from '@/shared/lib';

export const useCartAutoExit = () => {
  // Object.values внутри useShallow даёт стабильный массив только если ссылки элементов не менялись
  // Для проверки пустой корзины достаточно длины — не создаём массив каждый рендер
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
