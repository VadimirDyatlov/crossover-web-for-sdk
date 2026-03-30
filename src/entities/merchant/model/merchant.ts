import { useEffect } from 'react';
import { create } from 'zustand';
import { api, types } from '@/shared/api';

interface Store {
  data: types.MerchantResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchMerchant: () => Promise<void>;
}

export const useMerchantStore = create<Store>((set) => ({
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

export const useMerchantLazy = () => {
  const { data, isLoading, fetchMerchant } = useMerchantStore();
  
  useEffect(() => {
    if (!data && !isLoading) fetchMerchant();
  }, [data, isLoading, fetchMerchant]);
};

