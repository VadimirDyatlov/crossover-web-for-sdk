import type { FC } from 'react';
import {
  MerchantInfo,
} from '@/entities/merchant';
import { OpenCartButton } from '@/features/open-cart';
import { useSelectCategory } from '@/features/select-category/model/select-category';
import { Box } from '@/shared/ui';
import { CategoryList } from '@/widgets/category-list';
import { CatalogHeader } from '@/widgets/header';
import { ProductDetailsModal } from '@/widgets/product-details-modal';
import { ProductList } from '@/widgets/product-list';

export const CatalogPage: FC = () => {
  useSelectCategory();

  return (
    <Box flexDirection="column" className="h-dvh overflow-hidden">
      <CatalogHeader />
      <MerchantInfo />
      <CategoryList />
      <ProductList />
      <OpenCartButton />
      <ProductDetailsModal />
    </Box>
  );
};
