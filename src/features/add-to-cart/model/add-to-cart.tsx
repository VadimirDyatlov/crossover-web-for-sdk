import { useCartStore } from '@/entities/cart';
import { types } from '@/shared/api';

export const useAddToCart = (product: types.Product) => {
  const { products, addProduct, removeOneProduct } = useCartStore();
  
  const cartItem = products[product.id];
  const count = cartItem ? cartItem.quantity : 0;
  const isExpanded = count > 0;

  const handleIncrement = () => addProduct(product);
  const handleDecrement = () => removeOneProduct(product.id);

  return {
    count,
    isExpanded,
    handleIncrement,
    handleDecrement,
  };
};