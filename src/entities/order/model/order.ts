import { useEffect } from 'react';
import { create } from 'zustand';
import { api, types } from '@/shared/api';

interface Store {
  orderList: {
    data: types.Order[];
    isLoading: boolean;
    error: string | null;
  };
  orderDetails: {
    data: types.OrderDetail[];
    isLoading: boolean;
    error: string | null;
    selectedOrder: types.Order | null;
  };
  // null нужен для сброса выбранного заказа при закрытии модалки
  setSelectedOrder: (order: types.Order | null) => void;
  fetchOrderList: () => Promise<void>;
  fetchOrderDetails: (id: string) => Promise<void>;
}

export const useOrderStore = create<Store>((set) => ({
  orderList: {
    data: [],
    isLoading: false,
    error: null,
  },
  orderDetails: {
    data: [],
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

  fetchOrderList: async () => {
    set((state) => ({
      orderList: { ...state.orderList, isLoading: true, error: null },
    }));

    try {
      const response = await api.getOrderList();
      // Без проверки ok — 4xx/5xx JSON попадёт в стор как список заказов
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: types.OrderResponse = await response.json();

      set((state) => ({
        orderList: { ...state.orderList, data: data.orders, isLoading: false },
      }));
    } catch (error) {
      set((state) => ({
        orderList: {
          ...state.orderList,
          error: 'Ошибка загрузки',
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
      const response = await api.getOrderDetails(id);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: types.OrderDetailResponse = await response.json();

      set((state) => ({
        orderDetails: {
          ...state.orderDetails,
          data: data.products,
          isLoading: false,
        },
      }));
    } catch (error) {
      set((state) => ({
        orderDetails: {
          ...state.orderDetails,
          error: 'Ошибка загрузки',
          isLoading: false,
        },
      }));
    }
  },
}));

export const useOrderListLazy = () => {
  // Подписка только на нужные поля — лишние ре-рендеры при изменении orderDetails не происходят
  const { data, isLoading, error } = useOrderStore((state) => state.orderList);
  const fetchOrderList = useOrderStore((state) => state.fetchOrderList);

  useEffect(() => {
    // error не проверялся — при неудаче data=[], isLoading=false → бесконечный ретрай
    if (!data.length && !isLoading && !error) fetchOrderList();
  }, [data.length, isLoading, error, fetchOrderList]);

  return { data, isLoading };
};

// export const useOrderDetailsLazy = (id: string) => {
//   const {
//     orderDetails: { data, isLoading },
//     fetchOrderDetails,
//   } = useOrderStore();

//   useEffect(() => {
//     if (!data && !isLoading) fetchOrderDetails(id);
//   }, [data, isLoading, fetchOrderDetails]);
// };
