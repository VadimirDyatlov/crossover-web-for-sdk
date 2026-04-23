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
      // Без проверки ok сервер может вернуть 4xx/5xx с JSON ошибки — он попадёт в стор как данные
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      set({ data, isLoading: false });
    } catch (error) {
      set({
        error: 'Ошибка',
        isLoading: false,
      });
    }
  },
}));

export const useMerchantLazy = () => {
  const { data, isLoading, error, fetchMerchant } = useMerchantStore();

  useEffect(() => {
    // error не проверялся — при неудаче data=null, isLoading=false → бесконечный ретрай
    if (!data && !isLoading && !error) fetchMerchant();
  }, [data, isLoading, error, fetchMerchant]);
};
