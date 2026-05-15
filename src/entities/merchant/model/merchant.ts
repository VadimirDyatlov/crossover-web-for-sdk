import type { types } from '@/shared/api';
import { useEffect } from 'react';
import { create } from 'zustand';
import { api, bridgeMock } from '@/shared/api';

interface Store {
  data: types.MerchantResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchMerchant: (branchId: string) => Promise<void>;
}

export const useMerchantStore = create<Store>((set) => ({
  data: null,
  isLoading: false,
  error: null,

  fetchMerchant: async (branchId: string) => {
    try {
      set({ isLoading: true, error: null });

      const data = await api.getMerchant(branchId);

      // TODO: Добавить проверку valibot
      set({ data, isLoading: false });
    } catch (error) {
      set({
        error: `Ошибка: ${error instanceof Error ? error.message : String(error)}`,
        isLoading: false,
      });
    }
  },
}));

export const useMerchantLazy = () => {
  const { data, isLoading, error, fetchMerchant } = useMerchantStore();
  const branchId = bridgeMock.getExtBranchId();

  useEffect(() => {
    if (!data && !isLoading && !error) fetchMerchant(branchId);
  }, [data, isLoading, error, fetchMerchant, branchId]);
};
