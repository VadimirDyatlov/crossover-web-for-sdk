import { SelectCategory } from '@/features/select-category';
import { Header } from '@/entities/header';
import { MerchantInfo } from '@/entities/merchant';
import { Box } from '@/shared/ui';
import styles from './catalog-bar.module.css';
import type { FC } from 'react';
import { cn } from '@/shared/lib';

export const CatalogBar: FC = () => {

  return (
    <Box
      flexDirection="column"
      className={cn('sticky z-12 top-0 bg-white', styles.catalogCarContainer)}
    >
      <Header />
      <MerchantInfo />
      <SelectCategory />
    </Box>
  );
};
