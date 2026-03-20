import type { types } from '@/shared/api';
import { create } from 'zustand';

interface Store {
  selectedCategory: types.Category | null;
  setSelectedCategory: (category: types.Category) => void;
}

export const useCategory = create<Store>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category: types.Category) => {
    set({ selectedCategory: category });
  },
}));
