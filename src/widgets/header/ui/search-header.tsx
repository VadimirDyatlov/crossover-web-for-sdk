import type { FC } from 'react';
import { NavigateBackButton } from '@/features/navigate-back';
import { ProductSearchInput } from '@/features/product-search';
import { Stack } from '@/shared/ui';

export const SearchHeader: FC = () => {
  return (
    <Stack className="pt-[env(safe-area-inset-top)]">
      <Stack direction="row" align="center" className="h-[44px] pl-2 pr-4">
        <NavigateBackButton fallbackUrl="/" />
        <ProductSearchInput />
      </Stack>
      {/* TODO: Добавить рекомендации */}
    </Stack>
  );
};
