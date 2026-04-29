import { useCategoryStore } from '@/entities/category';
import { useScrollRestoration } from '@/shared/lib';

export const useProductListScroll = () => {
  const categoryId = useCategoryStore((state) => state.selectedCategory?.id);
  
  const { scrollRef } = useScrollRestoration('product-list', categoryId);

  return { scrollRef };
};
