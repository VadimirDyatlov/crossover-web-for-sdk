import { useEffect } from 'react';

import { create } from 'zustand';
import { useSearchStore } from '@/entities/product';

interface Store {
  query: string;
  setQuery: (text: string) => void;
}

export const useSearchProductStore = create<Store>((set) => ({
  query: '',
  setQuery: (text) => set({ query: text }),
}));

export const useSearchLogic = () => {
  const { query, setQuery } = useSearchProductStore();
  const fetchListByText = useSearchStore((state) => state.fetchListByText);
  const clearSearch = useSearchStore((state) => state.clearSearch);

  useEffect(() => {
    if (query.trim() === '') {
      // TODO: clearSearch срабатывает при первом рендера, подумать как исправить
      clearSearch();
      return;
    }

    const timer = setTimeout(() => {
      fetchListByText(query);
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    query,
    setQuery,
  };
};
