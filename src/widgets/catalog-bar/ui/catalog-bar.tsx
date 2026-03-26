import { useMerchantInfo } from '@/entities/merchant-info';
import { CategorySelector } from '@/features/сategory-selector/ui/category-selector';
import { Header } from '@/entities/header';
import { MerchantInfo } from '@/entities/merchant-info';
import { Box } from '@/shared/ui';
import type { FC } from 'react';

export const CatalogBar: FC = () => {
  const { data } = useMerchantInfo();

  return (
    <Box flexDirection="column" className="sticky top-0">
      <Header />
      <MerchantInfo
        name={data?.name}
        address={data?.address}
        logoUrl={data?.logoUrl}
      />
      <CategorySelector />
    </Box>
  );
};
