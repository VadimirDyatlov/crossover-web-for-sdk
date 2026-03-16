import { create } from 'zustand';
import { api, types } from '@/shared/api';

interface Store {
  data: types.Product[];
  isLoading: boolean;
  error: string | null;
  cache: Record<string, types.Product[]>;
  fetchProductList: (id: string) => Promise<void>;
}

export const useProductsBlock = create<Store>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,
  cache: {},

  fetchProductList: async (id: string) => {
    const cached = get().cache[id];

    if (cached) {
      set({ data: cached });

      return;
    }

    try {
      set({ isLoading: true });

      const response = await api.getProductList(id);
      const data: types.ProductsResponse = await response.json();

      set((state) => ({
        data: data.products,
        isLoading: false,
        cache: {
          ...state.cache,
          [id]: data.products,
        },
      }));
    } catch (error) {
      set({
        error: 'Ошибка',
        isLoading: false,
      });
    }
  },
}));
