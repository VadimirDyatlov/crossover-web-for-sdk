import type { FC } from 'react';
import {
  MerchantInfo,
  useMerchantLazy,
  useMerchantStore,
} from '@/entities/merchant';
import { OpenCartButton } from '@/features/open-cart';
import { useSelectCategory } from '@/features/select-category/model/select-category';
import { useSplashScreen } from '@/shared/lib';
import { Box, FullPageError, Stack } from '@/shared/ui';
import { CategoryList } from '@/widgets/category-list';
import { CatalogHeader } from '@/widgets/header';
import { ProductDetailsModal } from '@/widgets/product-details-modal';
import { ProductList } from '@/widgets/product-list';

export const CatalogPage: FC = () => {
  useMerchantLazy();
  useSelectCategory();

  const isReady = useMerchantStore((state) => !!state.data);
  const error = useMerchantStore((state) => state.error);

  // Убираем HTML-сплэш только когда данные загружены (или ошибка) —
  // сплэш остаётся видимым вместо React-скелетона, переход сразу к готовой странице.
  useSplashScreen(isReady, !!error);

  if (!isReady && !error) return null;
  if (error) return <FullPageError />;

  return (
    <Box flexDirection="column" className="h-dvh overflow-hidden">
      <CatalogHeader />
      <Stack className="min-h-0 overflow-y-auto overscroll-y-none">
        <MerchantInfo />
        <CategoryList />
        <ProductList />
      </Stack>
      <OpenCartButton />
      <ProductDetailsModal />
    </Box>
  );
};
