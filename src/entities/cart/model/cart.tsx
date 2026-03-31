import { types } from '@/shared/api';
import { create } from 'zustand';

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

    let newProductMap;

    if (existing) {
      newProductMap = {
        ...productMap,
        [product.id]: {
          ...existing,
          quantity: existing.quantity + 1,
        },
      };
    } else {
      newProductMap = {
        ...productMap,
        [product.id]: {
          product,
          quantity: 1,
        },
      };
    }
    
    const items = Object.values(newProductMap);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    set({ productMap: newProductMap, totalQuantity, totalPrice });
  },
  removeOneProduct: (id: string) => {
    const { productMap } = get();
    const existing = productMap[id];
    
    if (!existing) return;
    
    let newProducts;
    if (existing.quantity === 1) {
      newProducts = { ...productMap };
      delete newProducts[id];
    } else {
      newProducts = {
        ...productMap,
        [id]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    }
    
    const items = Object.values(newProducts);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    set({ productMap: newProducts, totalQuantity, totalPrice });
  },
  removeProduct: (id: string) => {
    const { productMap } = get();
    const newProductMap = { ...productMap };
    delete newProductMap[id];

    const items = Object.values(newProductMap);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    set({ productMap: newProductMap, totalQuantity, totalPrice });
  },
  clearCart: () => {
    set({ productMap: {}, totalPrice: 0, totalQuantity: 0 });
  },
}));
