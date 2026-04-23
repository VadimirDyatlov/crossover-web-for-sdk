import type { FC } from 'react';
import {
  MerchantInfo,
  useMerchantLazy,
  useMerchantStore,
} from '@/entities/merchant';
import { OpenCartButton } from '@/features/open-cart';
import { useSelectCategory } from '@/features/select-category/model/select-category';
import { Box, Stack } from '@/shared/ui';
import { CategoryList } from '@/widgets/category-list';
import { CatalogHeader } from '@/widgets/header';
import { ProductDetailsModal } from '@/widgets/product-details-modal';
import { ProductList } from '@/widgets/product-list';
import { CatalogSkeleton } from './catalog-skeleton';
// import { useCategoryStore } from '@/entities/category';
// import { useScrollRestoration } from '@/shared/lib';

export const CatalogPage: FC = () => {
  useMerchantLazy();
  useSelectCategory();

  const isReady = useMerchantStore((state) => !!state.data);
  if (!isReady) return <CatalogSkeleton />;

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
