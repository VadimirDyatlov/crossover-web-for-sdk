import type { types } from '@/shared/api';
import { useMemo } from 'react';
import { useCategoryStore } from '@/entities/category';
import { useMerchantStore } from '@/entities/merchant';
import { useProductStore } from '@/entities/product/model/product';
import { trackAction, USER_ACTION } from '@/shared/lib';

export const useSelectCategory = () => {
  const categoryData = useMerchantStore((state) => state.data?.category);
  const categories = useMemo(() => categoryData || [], [categoryData]);
  const pointId = useMerchantStore((state) => state.data?.pointId) || '';
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const fetchProductList = useProductStore((state) => state.fetchProductList);

  const handleSelect = (category: types.Category) => {
    // Трекаем только пользовательский выбор; авто-выбор первой категории
    // в useEffect ниже событием не считается
    trackAction(USER_ACTION.CATEGORY_SELECT, {
      categoryId: category.id,
      categoryName: category.name,
    });
    setSelectedCategory(category);
    // Race condition: быстрый клик по двум категориям может вернуть ответы в обратном порядке.
    // Полное решение — AbortController в API-слое. Пока кэш в productStore смягчает проблему
    // для уже загруженных категорий (повторный запрос не делается).
    const params = {
      categoryId: category.id,
      pointId,
    };
    fetchProductList(params);
  };

  return {
    categories,
    selectedId: selectedCategory?.id,
    handleSelect,
  };
};
