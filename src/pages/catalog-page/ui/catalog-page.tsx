import { CatalogHeader } from '@/widgets/header';
import { CategoryList } from '@/widgets/category-list';
import { ProductList } from '@/widgets/product-list';
import { ProductDetailsModal } from '@/widgets/product-details-modal';
import { useSelectCategory } from '@/features/select-category/model/select-category';
import { OpenCartButton } from '@/features/open-cart';
import { MerchantInfo, useMerchantLazy } from '@/entities/merchant';
import { Box, Stack } from '@/shared/ui';
import type { FC } from 'react';
// import { useCategoryStore } from '@/entities/category';
// import { useScrollRestoration } from '@/shared/lib';

export const CatalogPage: FC = () => {
  useMerchantLazy();
  useSelectCategory();

  // const { selectedCategory } = useCategoryStore();
  // const scrollRef = useScrollRestoration('product-list', selectedCategory?.id );
  // h-full  h-dvh
  return (
    <Box flexDirection="column" className="h-dvh overflow-hidden">
      <CatalogHeader />
      <Stack
        // ref={scrollRef}
        className="min-h-0 overflow-y-auto"
      >
        <MerchantInfo />
        <CategoryList />
        <ProductList />
      </Stack>
      <OpenCartButton />
      <ProductDetailsModal />
    </Box>
  );
};
