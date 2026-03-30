import { types } from '@/shared/api';
import { create } from 'zustand';

interface Store {
  products: Record<string, { product: types.Product; quantity: number }>;
  totalPrice: number;
  totalQuantity: number;
  
  addProduct: (product: types.Product) => void; 
  removeProduct: (id: string) => void;
  removeOneProduct: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<Store>((set, get) => ({
  products: {},
  totalPrice: 0,
  totalQuantity: 0,

  addProduct: (product: types.Product) => {
    const { products } = get();
    const existing = products[product.id];

    let newProducts;

    if (existing) {
      newProducts = {
        ...products,
        [product.id]: {
          ...existing,
          quantity: existing.quantity + 1,
        },
      };
    } else {
      newProducts = {
        ...products,
        [product.id]: {
          product,
          quantity: 1,
        },
      };
    }
    
    const items = Object.values(newProducts);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    set({ products: newProducts, totalQuantity, totalPrice });
  },
  removeOneProduct: (id: string) => {
    const { products } = get();
    const existing = products[id];
    
    if (!existing) return;
    
    let newProducts;
    if (existing.quantity === 1) {
      newProducts = { ...products };
      delete newProducts[id];
    } else {
      newProducts = {
        ...products,
        [id]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    }
    
    const items = Object.values(newProducts);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    set({ products: newProducts, totalQuantity, totalPrice });
  },
  removeProduct: (id: string) => {
    const { products } = get();
    const newProducts = { ...products };
    delete newProducts[id];

    const items = Object.values(newProducts);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    set({ products: newProducts, totalQuantity, totalPrice });
  },
  clearCart: () => {
    set({ products: {}, totalPrice: 0, totalQuantity: 0 });
  },
}));
