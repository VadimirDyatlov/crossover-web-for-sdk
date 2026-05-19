import type { types } from '@/shared/api';
import { useCallback, useRef } from 'react';
import { useCartStore } from '@/entities/cart';
import { trackAction, USER_ACTION } from '@/shared/lib';

// Минимальный интервал между тапами: защита от задвоения на мобильных без внешних зависимостей
const TAP_THROTTLE_MS = 300;

export const useAddToCart = (product: types.Product) => {
  const { productMap, addProduct, removeOneProduct } = useCartStore();

  const cartItem = productMap[product.id];
  const count = cartItem ? cartItem.quantity : 0;
  const isExpanded = count > 0;

  const lastTapRef = useRef(0);

  const throttle = useCallback((fn: () => void) => {
    const now = Date.now();
    // Игнорируем повторный тап если прошло меньше TAP_THROTTLE_MS
    if (now - lastTapRef.current < TAP_THROTTLE_MS) return;
    lastTapRef.current = now;
    fn();
  }, []);

  const handleIncrement = useCallback(
    () =>
      throttle(() => {
        addProduct(product);
        // Событие в нативку шлём внутри throttle — задвоённые тапы не должны
        // порождать задвоённые события аналитики
        trackAction(USER_ACTION.CART_ADD, {
          productId: product.id,
          productName: product.name,
          price: product.price,
        });
      }),
    [throttle, addProduct, product],
  );
  const handleDecrement = useCallback(
    () =>
      throttle(() => {
        removeOneProduct(product.id);
        trackAction(USER_ACTION.CART_REMOVE_ONE, {
          productId: product.id,
          productName: product.name,
        });
      }),
    [throttle, removeOneProduct, product],
  );

  return {
    count,
    isExpanded,
    handleIncrement,
    handleDecrement,
  };
};
