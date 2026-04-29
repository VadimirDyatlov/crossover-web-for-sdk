import { create } from 'zustand';

interface Store {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useProductSearchStore = create<Store>((set) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
}));
