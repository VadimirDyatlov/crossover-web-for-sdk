import { useEffect } from 'react';
import { useMerchantStore } from '@/entities/merchant';
import { useProductStore } from '@/entities/product/model/product';
import { useCategoryStore } from '@/entities/category';
import type { types } from '@/shared/api';

export const useSelectCategory = () => {
  const categories = useMerchantStore((state) => state.data?.category) || [];
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const { fetchProductList } = useProductStore(); 

  const handleSelect = (category: types.Category) => {
    setSelectedCategory(category);
    fetchProductList(category.id); 
  };

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
      fetchProductList(categories[0].id);
    }
  }, [categories, selectedCategory]);

  return {
    categories,
    selectedId: selectedCategory?.id,
    handleSelect,
  };
};
