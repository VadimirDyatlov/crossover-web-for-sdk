import { useEffect, useLayoutEffect, useRef } from 'react';
import { create } from 'zustand';
import { api, types } from '@/shared/api';
import { useCategoryStore } from '@/entities/category';

interface Store {
  data: types.Product[];
  isLoading: boolean;
  error: string | null;
  cache: Record<string, types.Product[]>;
  scrollPositions: Record<string, number>;
  setScrollPosition: (key: string, position: number) => void;
  fetchProductList: (id: string) => Promise<void>;
}

export const useProductListStore = create<Store>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,
  cache: {},
  scrollPositions: {},

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
  setScrollPosition: (key: string, position: number) => {
    set((state) => ({
      scrollPositions: {
        ...state.scrollPositions,
        [key]: position,
      },
    }));
  },
}));

export const useProductsByCategory = () => {
  const { fetchProductList } = useProductListStore();
  const { selectedCategory } = useCategoryStore();
  
    
  useEffect(() => {
    if (!selectedCategory) return;
    
    fetchProductList(selectedCategory.id);
  }, [selectedCategory]);
}

export const useProductsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setScrollPosition, scrollPositions } = useProductListStore();
  const { selectedCategory } = useCategoryStore();

  const scrollKey = `products-${selectedCategory?.id}`;

  useEffect(() => {
    if (!scrollRef.current || !selectedCategory?.id) return;

    const savedPosition = scrollPositions[scrollKey];

    if (savedPosition) {
      scrollRef.current.scrollTop = savedPosition;
    } else {
      scrollRef.current.scrollTop = 0;
    }
  }, [scrollKey, scrollPositions]);

  useLayoutEffect(() => {
    return () => {
      if (scrollRef.current && selectedCategory?.id) {
        setScrollPosition(scrollKey, scrollRef.current.scrollTop);
      }
    };
  }, [scrollKey, scrollRef, setScrollPosition]);

  return scrollRef;
};
