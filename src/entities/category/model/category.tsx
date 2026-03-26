import { useEffect, useRef } from 'react';
import { create } from 'zustand';
import type { types } from '@/shared/api';

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

export const useScrollToSelected = () => {
  const activeButtonRef = useRef<HTMLButtonElement>(null);
  const { selectedCategory } = useCategory();

  useEffect(() => {
    if (activeButtonRef.current) {
      activeButtonRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedCategory]);

  return activeButtonRef;
};
