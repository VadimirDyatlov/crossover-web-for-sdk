import type { types } from '@/shared/api';
// @vitest-environment node
import { beforeEach, describe, expect, it } from 'vitest';
import { useCartStore } from './cart';

const mockProduct = (id: string, price: number): types.Product => ({
  id,
  name: `Товар ${id}`,
  price,
  imageUrl: '',
});

beforeEach(() => {
  useCartStore.setState({ productMap: {}, totalPrice: 0, totalQuantity: 0 });
});

describe('useCartStore', () => {
  describe('addProduct', () => {
    it('добавляет новый товар с quantity=1', () => {
      useCartStore.getState().addProduct(mockProduct('1', 100));
      const state = useCartStore.getState();
      expect(state.productMap['1'].quantity).toBe(1);
      expect(state.totalQuantity).toBe(1);
      expect(state.totalPrice).toBe(100);
    });

    it('увеличивает quantity при повторном добавлении', () => {
      const store = useCartStore.getState();
      store.addProduct(mockProduct('1', 100));
      store.addProduct(mockProduct('1', 100));
      const state = useCartStore.getState();
      expect(state.productMap['1'].quantity).toBe(2);
      expect(state.totalQuantity).toBe(2);
      expect(state.totalPrice).toBe(200);
    });

    it('считает итоги для нескольких разных товаров', () => {
      const store = useCartStore.getState();
      store.addProduct(mockProduct('1', 100));
      store.addProduct(mockProduct('2', 50));
      const state = useCartStore.getState();
      expect(state.totalQuantity).toBe(2);
      expect(state.totalPrice).toBe(150);
    });
  });

  describe('removeOneProduct', () => {
    it('уменьшает quantity на 1', () => {
      const store = useCartStore.getState();
      store.addProduct(mockProduct('1', 100));
      store.addProduct(mockProduct('1', 100));
      store.removeOneProduct('1');
      expect(useCartStore.getState().productMap['1'].quantity).toBe(1);
    });

    it('удаляет товар когда quantity становится 0', () => {
      const store = useCartStore.getState();
      store.addProduct(mockProduct('1', 100));
      store.removeOneProduct('1');
      expect(useCartStore.getState().productMap['1']).toBeUndefined();
      expect(useCartStore.getState().totalQuantity).toBe(0);
    });

    it('ничего не делает для несуществующего id', () => {
      useCartStore.getState().removeOneProduct('999');
      expect(useCartStore.getState().totalQuantity).toBe(0);
    });
  });

  describe('removeProduct', () => {
    it('удаляет товар полностью независимо от quantity', () => {
      const store = useCartStore.getState();
      store.addProduct(mockProduct('1', 100));
      store.addProduct(mockProduct('1', 100));
      store.removeProduct('1');
      expect(useCartStore.getState().productMap['1']).toBeUndefined();
      expect(useCartStore.getState().totalPrice).toBe(0);
    });
  });

  describe('clearCart', () => {
    it('очищает корзину полностью', () => {
      const store = useCartStore.getState();
      store.addProduct(mockProduct('1', 100));
      store.addProduct(mockProduct('2', 50));
      store.clearCart();
      const state = useCartStore.getState();
      expect(state.productMap).toEqual({});
      expect(state.totalPrice).toBe(0);
      expect(state.totalQuantity).toBe(0);
    });
  });

  describe('getProductList', () => {
    it('возвращает массив товаров из productMap', () => {
      const store = useCartStore.getState();
      store.addProduct(mockProduct('1', 100));
      store.addProduct(mockProduct('2', 50));
      expect(store.getProductList()).toHaveLength(2);
    });
  });
});
