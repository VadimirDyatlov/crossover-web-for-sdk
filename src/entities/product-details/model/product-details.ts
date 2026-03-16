import { create } from 'zustand';
import { api, types } from '@/shared/api';

interface Store {
  data: types.ProductDetail | null;
  isLoading: boolean;
  error: string | null;
  fetchProductDetails: (id: string) => Promise<void>;
}

export const useProductDetails = create<Store>((set) => ({
  data: null,
  isLoading: false,
  error: null,

  fetchProductDetails: async (id: string) => {
    try {
      set({ isLoading: true });

      const response = await api.getProductDetails(id);
      const data: types.ProductDetail = await response.json();

      set({
        data,
        isLoading: false,
      });
    } catch {
      set({
        error: 'Ошибка',
        isLoading: false,
      });
    }
  },
}));
