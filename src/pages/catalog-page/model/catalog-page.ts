import { create } from 'zustand';
import { api, types } from '@/shared/api';

interface Store {
  data: types.MerchantResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchMerchant: () => Promise<void>;
}

export const useCatalogPage = create<Store>((set) => ({
  data: null,
  isLoading: false,
  error: null,

  fetchMerchant: async () => {
    try {
      set({ isLoading: true });

      const response = await api.getMerchant();
      const data = await response.json();

      set({
        data: data,
        isLoading: false,
     });
    } catch (error) {
      set({
        error: 'Ошибка',
        isLoading: false,
      });
    }
  },
}));
