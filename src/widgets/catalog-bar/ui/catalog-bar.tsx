import { CategorySelector } from '@/features/сategory-selector/ui/category-selector';
import { Header } from '@/entities/header';
import { MerchantInfo } from '@/entities/merchant-info';
import { Box } from '@/shared/ui';
import type { FC } from 'react';

export const CatalogBar: FC = () => {

  return (
    <Box
      flexDirection="column"
      className="sticky top-0 z-12 bg-white/80 backdrop-blur-[40px]"
    >
      <Header />
      <MerchantInfo />
      <CategorySelector />
    </Box>
  );
};
