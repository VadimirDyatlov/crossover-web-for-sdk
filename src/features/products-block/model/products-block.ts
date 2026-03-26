import { useEffect, useLayoutEffect, useRef } from 'react';
import { create } from 'zustand';
import { api, types } from '@/shared/api';
import { useCategory } from '@/entities/category';

interface Store {
  data: types.Product[];
  isLoading: boolean;
  error: string | null;
  cache: Record<string, types.Product[]>;
  scrollPosition: number | null;
  setScrollPosition: (position: number) => void;
  fetchProductList: (id: string) => Promise<void>;
}

export const useProductsBlock = create<Store>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,
  cache: {},
  scrollPosition: null,

  fetchProductList: async (id: string) => {
    const cached = get().cache[id];

    if (cached) {
      set({ data: cached });

      return;
    }

    try {
      set({ isLoading: true });

      const response = await api.getProductList(id);
      const data: types.ProductsResponse = await response.json();

      set((state) => ({
        data: data.products,
        isLoading: false,
        cache: {
          ...state.cache,
          [id]: data.products,
        },
      }));
    } catch (error) {
      set({
        error: 'Ошибка',
        isLoading: false,
      });
    }
  },
  setScrollPosition: (position: number) => {
    set({ scrollPosition: position });
  },
}));

export const useProductsByCategory = () => {
  const { fetchProductList } = useProductsBlock();
  const { selectedCategory } = useCategory();
  
    
  useEffect(() => {
    if (!selectedCategory) return;
    
    fetchProductList(selectedCategory.id);
  }, [selectedCategory]);
}

export const useProductsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setScrollPosition, scrollPosition } = useProductsBlock();

  useEffect(() => {
    if (!scrollRef.current || !scrollPosition) return;
      scrollRef.current.scrollTop = scrollPosition;
  }, []);

  useLayoutEffect(() => {
    return () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollTop);
      }
    };
  }, [scrollRef, setScrollPosition]);

  return scrollRef;
};
