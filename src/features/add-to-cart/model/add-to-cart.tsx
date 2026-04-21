import { useCartStore } from '@/entities/cart';
import { types } from '@/shared/api';
import { useRef, useCallback } from 'react';

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
    () => throttle(() => addProduct(product)),
    [throttle, addProduct, product],
  );
  const handleDecrement = useCallback(
    () => throttle(() => removeOneProduct(product.id)),
    [throttle, removeOneProduct, product.id],
  );

  return {
    count,
    isExpanded,
    handleIncrement,
    handleDecrement,
  };
};
