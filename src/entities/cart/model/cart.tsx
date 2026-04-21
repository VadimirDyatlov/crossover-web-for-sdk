import { types } from '@/shared/api';
import { create } from 'zustand';

type ProductMap = Record<string, { product: types.Product; quantity: number }>;

// Единый проход вместо двух отдельных reduce — O(n) вместо O(2n)
const calcTotals = (map: ProductMap) =>
  Object.values(map).reduce(
    (acc, item) => ({
      totalQuantity: acc.totalQuantity + item.quantity,
      totalPrice: acc.totalPrice + item.product.price * item.quantity,
    }),
    { totalQuantity: 0, totalPrice: 0 },
  );

interface Store {
  productMap: Record<string, { product: types.Product; quantity: number }>;
  totalPrice: number;
  totalQuantity: number;
  
  getProductList: () => { product: types.Product; quantity: number }[];
  addProduct: (product: types.Product) => void; 
  removeProduct: (id: string) => void;
  removeOneProduct: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<Store>((set, get) => ({
  productMap: {},
  totalPrice: 0,
  totalQuantity: 0,

  getProductList: () => Object.values(get().productMap),
  addProduct: (product: types.Product) => {
    const { productMap } = get();
    const existing = productMap[product.id];

    const newProductMap = existing
      ? { ...productMap, [product.id]: { ...existing, quantity: existing.quantity + 1 } }
      : { ...productMap, [product.id]: { product, quantity: 1 } };

    set({ productMap: newProductMap, ...calcTotals(newProductMap) });
  },
  removeOneProduct: (id: string) => {
    const { productMap } = get();
    const existing = productMap[id];

    if (!existing) return;

    let newProductMap;
    if (existing.quantity === 1) {
      // delete на копии мутирует объект — используем деструктуризацию с rest
      const { [id]: _, ...rest } = productMap;
      newProductMap = rest;
    } else {
      newProductMap = { ...productMap, [id]: { ...existing, quantity: existing.quantity - 1 } };
    }

    set({ productMap: newProductMap, ...calcTotals(newProductMap) });
  },
  removeProduct: (id: string) => {
    const { productMap } = get();
    // delete на копии мутирует объект — используем деструктуризацию с rest
    const { [id]: _, ...newProductMap } = productMap;

    set({ productMap: newProductMap, ...calcTotals(newProductMap) });
  },
  clearCart: () => {
    set({ productMap: {}, totalPrice: 0, totalQuantity: 0 });
  },
}));
