import type { FC } from 'react';
import { NavigateBackButton } from '@/features/navigate-back';
import { ProductSearchInput } from '@/features/search-products';
import { Stack } from '@/shared/ui';

export const SearchHeader: FC = () => {
  return (
    <Stack className="pt-[env(safe-area-inset-top)]">
      <Stack direction="row" align="center" className="h-[40px] pl-2 pr-4 my-[2px]">
        <NavigateBackButton fallbackUrl="/" />
        <ProductSearchInput />
      </Stack>
      {/* TODO: Добавить рекомендации */}
    </Stack>
  );
};
