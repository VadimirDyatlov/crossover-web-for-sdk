import { useEffect } from 'react';
import { useMerchantInfo } from '@/entities/merchant-info';
import { useCategory } from '@/entities/category';
import type { types } from '@/shared/api';

export const useCategorySelector = () => {
  const categories = useMerchantInfo((state) => state.data?.category) || [];
  const { selectedCategory, setSelectedCategory } = useCategory();

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