import { useEffect } from 'react';
import { useMerchantInfo } from '@/entities/merchant-info';
import { Category, useCategory } from '@/entities/category';
import { Stack } from '@/shared/ui';
import type { FC } from 'react';


export const CategorySelector: FC = () => {
  const categories = useMerchantInfo((state) => state.data?.category) || [];
  const { setSelectedCategory } = useCategory();

  useEffect(() => {
    if (!categories.length) return;

    setSelectedCategory(categories[0]);
  }, [categories]);

  return (
    <Stack
      direction="horizontal"
      spacing="md"
      className="mt-3.5 mb-3.5 pl-4 overflow-x-auto [scrollbar-width:none]"
    >
      {categories.map((category) => {
        return <Category category={category} />;
      })}
    </Stack>
  );
};
