import type { types } from '@/shared/api';
import { create } from 'zustand';
import { api } from '@/shared/api';

// Модульная переменная — отменяет предыдущий запрос при быстром переключении категорий
let productListAbortController: AbortController | null = null;

interface Store {
  productList: {
    data: types.Product[];
    isLoading: boolean;
    error: string | null;
    cache: Record<string, types.Product[]>;
  };
  productDetails: {
    data: types.ProductDetail | null;
    isLoading: boolean;
    error: string | null;
  };
  fetchProductList: (id: string) => Promise<void>;
  fetchProductDetails: (id: string) => Promise<void>;
  resetProductDetailsError: () => void;
}

export const useProductStore = create<Store>((set, get) => ({
  productList: {
    data: [],
    isLoading: false,
    error: null,
    cache: {},
  },
  productDetails: {
    data: null,
    isLoading: false,
    error: null,
  },

  fetchProductList: async (categoryId: string) => {
    const cachedData = get().productList.cache[categoryId];

    if (cachedData) {
      set((state) => ({
        productList: { ...state.productList, data: cachedData, error: null },
      }));
      return;
    }

    productListAbortController?.abort();
    productListAbortController = new AbortController();

    set((state) => ({
      productList: { ...state.productList, isLoading: true, error: null },
    }));

    try {
      const response = await api.getProductList(
        categoryId,
        productListAbortController.signal,
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: types.ProductResponse = await response.json();
      set((state) => ({
        productList: {
          ...state.productList,
          data: data.products,
          isLoading: false,
          cache: {
            ...state.productList.cache,
            [categoryId]: data.products,
          },
        },
      }));
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;

      set((state) => ({
        productList: {
          ...state.productList,
          isLoading: false,
          error: 'Ошибка загрузки товаров',
        },
      }));
    }
  },

  fetchProductDetails: async (productId: string) => {
    set((state) => ({
      productDetails: { ...state.productDetails, isLoading: true, error: null },
    }));

    try {
      const response = await api.getProductDetails(productId);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: types.ProductDetail = await response.json();
      set((state) => ({
        productDetails: {
          ...state.productDetails,
          data,
          isLoading: false,
        },
      }));
    } catch (error) {
      set((state) => ({
        productDetails: {
          ...state.productDetails,
          isLoading: false,
          error: `Ошибка загрузки деталей: ${error instanceof Error ? error.message : String(error)}`,
        },
      }));
    }
  },
  
  resetProductDetailsError: () => set((state) => ({
    productDetails: {
      ...state.productDetails,
      error: null,
    }
  })),
}));
