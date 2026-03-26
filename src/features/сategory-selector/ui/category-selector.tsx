import { useCategorySelector } from '../model/сategory-selector';
import { Category } from '@/entities/category';
import { Stack } from '@/shared/ui';
import type { FC } from 'react';

export const CategorySelector: FC = () => {
  const { categories, handleSelect } = useCategorySelector();

  return (
    <Stack
      direction="horizontal"
      className="mt-3.5 mb-3.5 pl-2 pr-2 overflow-x-auto [scrollbar-width:none]"
    >
      {categories.map((category) => {
        return (
          <Category key={category.id} category={category} onClick={handleSelect} />
        );
      })}
    </Stack>
  );
};
