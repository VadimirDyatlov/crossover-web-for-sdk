import type { types } from '@/shared/api';
import { create } from 'zustand';
import {
  mockProducts1,
  mockProducts2,
  mockProducts3,
  mockProducts4,
} from '@/shared/api/mocks/mocks';

const mockProducts = [
  ...mockProducts1,
  ...mockProducts2,
  ...mockProducts3,
  ...mockProducts4,
];

// product/namesList
// product/listByText
interface SearchStore {
  namesList: {
    data: string[];
    isLoading: boolean;
    error: string | null;
  };
  searchResult: {
    data: types.Product[];
    isLoading: boolean;
    error: string | null;
  };

  fetchNamesList: (text: string) => Promise<void>;
  fetchListByText: (text: string) => Promise<void>;
  clearSearch: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  namesList: {
    data: [],
    isLoading: false,
    error: null,
  },
  searchResult: {
    // data: mockProducts,
    data: [],
    isLoading: false,
    error: null,
  },

  fetchNamesList: async (text) => {
    if (!text.trim()) {
      set((state) => ({ namesList: { ...state.namesList, data: [] } }));
      return;
    }

    set((state) => ({
      namesList: { ...state.namesList, isLoading: true, error: null },
    }));

    try {
      const data = ['Раф', 'Латте', 'Капучино'];

      set((state) => ({
        namesList: { ...state.namesList, data, isLoading: false, error: null },
      }));
    } catch (error) {
      set((state) => ({
        namesList: {
          ...state.namesList,
          isLoading: false,
          error: `Ошибка: ${error instanceof Error ? error.message : String(error)}`,
        },
      }));
    }
  },

  fetchListByText: async (text) => {
    if (!text.trim()) return;

    set((state) => ({
      searchResult: { ...state.searchResult, isLoading: true, error: null },
    }));

    try {
      const response = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(text),
      );

      set((state) => ({
        searchResult: {
          ...state.searchResult,
          data: response,
          isLoading: false,
          error: null,
        },
      }));
    } catch (error) {
      set((state) => ({
        searchResult: {
          ...state.searchResult,
          isLoading: false,
          error: `Ошибка: ${error instanceof Error ? error.message : String(error)}`,
        },
      }));
    }
  },

  clearSearch: () =>
    set({
      searchResult: { data: mockProducts, isLoading: false, error: null },
    }),
}));
