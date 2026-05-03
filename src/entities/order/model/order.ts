import type { types } from '@/shared/api';
import { useEffect } from 'react';
import { create } from 'zustand';
import { api, bridgeMock } from '@/shared/api';

interface Store {
  orderList: {
    data: types.Order[];
    isLoading: boolean;
    error: string | null;
    page: number;
    limit: number;
  };
  orderDetails: {
    data: types.OrderDetailResponse | null;
    isLoading: boolean;
    error: string | null;
    selectedOrder: types.Order | null;
  };
  setSelectedOrder: (order: types.Order | null) => void;
  fetchOrderList: (params: types.GetOrderListParams) => Promise<void>;
  fetchOrderDetails: (id: string) => Promise<void>;
  resetOrderDetailsError: () => void;
}

export const useOrderStore = create<Store>((set, get) => ({
  orderList: {
    data: [],
    isLoading: false,
    error: null,
    // TODO: Для реализации ленивой загрузки 
    page: 1,
    limit: 30,
  },
  orderDetails: {
    data: null,
    isLoading: false,
    error: null,
    selectedOrder: null,
  },

  setSelectedOrder: (order: types.Order | null) =>
    set((state) => ({
      orderDetails: {
        ...state.orderDetails,
        selectedOrder: order,
      },
    })),

  fetchOrderList: async (params: types.GetOrderListParams) => {
    const { page, limit } = get().orderList;

    set((state) => ({
      orderList: { ...state.orderList, isLoading: true, error: null },
    }));

    try {
      const data = await api.getOrderList(
        { ...params, page, limit },
      );

      set((state) => ({
        orderList: { ...state.orderList, data: data.orders, isLoading: false },
      }));
    } catch (error) {
      set((state) => ({
        orderList: {
          ...state.orderList,
          error: `Ошибка: ${error instanceof Error ? error.message : String(error)}`,
          isLoading: false,
        },
      }));
    }
  },

  fetchOrderDetails: async (id: string) => {
    set((state) => ({
      orderDetails: { ...state.orderDetails, isLoading: true },
    }));

    try {
      const data = await api.getOrderDetails(id);

      set((state) => ({
        orderDetails: {
          ...state.orderDetails,
          data,
          isLoading: false,
        },
      }));
    } catch (error) {
      set((state) => ({
        orderDetails: {
          ...state.orderDetails,
          error: `Ошибка: ${error instanceof Error ? error.message : String(error)}`,
          isLoading: false,
        },
      }));
    }
  },

  resetOrderDetailsError: () => set((state) => ({
    orderDetails: {
      ...state.orderDetails,
      error: null,
    }
  })),
}));

export const useOrderListLazy = () => {
  const { data, isLoading, error } = useOrderStore((state) => state.orderList);
  const fetchOrderList = useOrderStore((state) => state.fetchOrderList);

  const extBranchId = bridgeMock.getExtBranchId();
  const subId = bridgeMock.getSubId();

  useEffect(() => {
    if (!data.length && !isLoading && !error)
      fetchOrderList({ extBranchId, subId });
  }, [data.length, isLoading, error, fetchOrderList, extBranchId, subId]);

  return { data, isLoading };
};

