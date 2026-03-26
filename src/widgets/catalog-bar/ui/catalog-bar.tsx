import { SelectCategory } from '@/features/сategory-selector/ui/select-category';
import { Header } from '@/entities/header';
import { MerchantInfo } from '@/entities/merchant-info';
import { Box } from '@/shared/ui';
import type { FC } from 'react';

export const CatalogBar: FC = () => {

  return (
    <Box flexDirection="column" className="sticky z-12 top-0">
      <Header />
      <MerchantInfo />
      <SelectCategory />
    </Box>
  );
};
