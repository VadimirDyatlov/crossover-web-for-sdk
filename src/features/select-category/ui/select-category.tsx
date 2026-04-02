import { useSelectCategory } from '../model/select-category';
import { Category } from '@/entities/category';
import { Stack } from '@/shared/ui';
import type { FC } from 'react';

// TODO: Это не фича, это виджет.
export const SelectCategory: FC = () => {
  const { categories, handleSelect } = useSelectCategory();

  return (
    <Stack
      direction="horizontal"
      className="mt-3.5 mb-3.5 pl-2 pr-2 overflow-x-auto [scrollbar-width:none]"
    >
      {categories.map((category) => {
        //  TODO: handleSelect само переключение это фича.
        return (
          <Category key={category.id} category={category} onClick={handleSelect} />
        );
      })}
    </Stack>
  );
};
