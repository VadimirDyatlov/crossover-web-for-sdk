import { useEffect } from 'react';
import { useMerchantStore } from '@/entities/merchant';
import { useCategoryStore } from '@/entities/category';
import type { types } from '@/shared/api';

export const useSelectCategory = () => {
  const categories = useMerchantStore((state) => state.data?.category) || [];
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  useEffect(() => {
    if (!categories.length) return;
    if (!selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory, setSelectedCategory]);

  const handleSelect = (category: types.Category) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    handleSelect,
  };
};