import { useCategoryStore } from '@/entities/category';
import { useMerchantStore } from '@/entities/merchant';
import { useProductStore } from '@/entities/product';
import { useScrollRestoration } from '@/shared/lib';

export const useProductListScroll = () => {
  const categoryId = useCategoryStore((state) => state.selectedCategory?.id);

  const { scrollRef } = useScrollRestoration('product-list', categoryId);

  return { scrollRef };
};

export const useProductListActions = () => {
  const fetchProductList = useProductStore((state) => state.fetchProductList);
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const pointId = useMerchantStore((state) => state.data?.pointId) || '';

  const handleRetry = () => {
    if (selectedCategory?.id) {
      fetchProductList({
        categoryId: selectedCategory.id,
        pointId,
      });
    }
  };

  return { handleRetry };
};
