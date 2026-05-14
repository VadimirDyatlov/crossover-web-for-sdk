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
    page: number;
    limit: number;
  };
  productDetails: {
    data: types.ProductDetail | null;
    isLoading: boolean;
    error: string | null;
  };
  fetchProductList: (params: types.GetProductListParams) => Promise<void>;
  fetchProductDetails: (id: string) => Promise<void>;
  resetProductDetailsError: () => void;
}

export const useProductStore = create<Store>((set, get) => ({
  productList: {
    data: [],
    isLoading: false,
    error: null,
    cache: {},
    // TODO: Для реализации ленивой загрузки 
    page: 1,
    limit: 30,
  },
  productDetails: {
    data: null,
    isLoading: false,
    error: null,
  },

  fetchProductList: async (params: types.GetProductListParams) => {
    const cachedData = get().productList.cache[params.categoryId];
    const { page, limit } = get().productList;

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
      const data = await api.getProductList(
        { ...params, page, limit },
        productListAbortController.signal,
      );

      set((state) => ({
        productList: {
          ...state.productList,
          data: data.products,
          isLoading: false,
          cache: {
            ...state.productList.cache,
            [params.categoryId]: data.products,
          },
        },
      }));
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;

      set((state) => ({
        productList: {
          ...state.productList,
          error: `Ошибка: ${error instanceof Error ? error.message : String(error)}`,
          isLoading: false,
        },
      }));
    }
  },

  fetchProductDetails: async (productId: string) => {
    set((state) => ({
      productDetails: { ...state.productDetails, isLoading: true, error: null },
    }));

    try {
      const data = await api.getProductDetails(productId);

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
          error: `Ошибка: ${error instanceof Error ? error.message : String(error)}`,
        },
      }));
    }
  },

  resetProductDetailsError: () =>
    set((state) => ({
      productDetails: {
        ...state.productDetails,
        error: null,
      },
    })),
}));
