import type { types } from '@/shared/api';
import { useEffect, useMemo } from 'react';
import { useCategoryStore } from '@/entities/category';
import { useMerchantStore } from '@/entities/merchant';
import { useProductStore } from '@/entities/product/model/product';

export const useSelectCategory = () => {
  const categoryData = useMerchantStore((state) => state.data?.category);
  // useMemo stabilises the reference so the array identity doesn't change on every render
  const categories = useMemo(() => categoryData || [], [categoryData]);
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  // Без селектора — ре-рендер при каждом изменении productStore (isLoading, data и т.д.)
  const fetchProductList = useProductStore((state) => state.fetchProductList);

  const handleSelect = (category: types.Category) => {
    setSelectedCategory(category);
    // Race condition: быстрый клик по двум категориям может вернуть ответы в обратном порядке.
    // Полное решение — AbortController в API-слое. Пока кэш в productStore смягчает проблему
    // для уже загруженных категорий (повторный запрос не делается).
    fetchProductList(category.id);
  };

  const handleRetry = () => {
    if (selectedCategory) {
      fetchProductList(selectedCategory.id);
    }
  };

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
      fetchProductList(categories[0].id);
    }
    // setSelectedCategory и fetchProductList — стабильные ссылки из Zustand, добавлены для exhaustive-deps
  }, [categories, selectedCategory, setSelectedCategory, fetchProductList]);

  return {
    categories,
    selectedId: selectedCategory?.id,
    handleSelect,
    handleRetry,
  };
};
