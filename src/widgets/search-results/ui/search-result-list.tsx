import type { FC } from 'react';
import { ProductCard, useSearchStore } from '@/entities/product';
import { cn } from '@/shared/lib';
import { Stack } from '@/shared/ui';

export const SearchResultList: FC = () => {
  const { data } = useSearchStore((state) => state.searchResult);

  return (
    <Stack
      spacing="xs"
      className={cn(
        'min-h-0 overflow-y-auto',
        'grid grid-cols-2 p-4',
        'pb-[calc(120px+env(safe-area-inset-bottom,0px))]',
      )}
    >
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Stack>
  );
};
