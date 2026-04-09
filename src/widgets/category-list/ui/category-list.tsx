import { useSelectCategory } from '@/features/select-category';
import { Category } from '@/entities/category';
import { cn, useScrollIntoView } from '@/shared/lib';
import { Stack } from '@/shared/ui';
import type { FC } from 'react';

export const CategoryList: FC = () => {
  const { categories, selectedId, handleSelect } = useSelectCategory();
  const activeRef = useScrollIntoView<string | undefined>(selectedId);

  return (
    <Stack
      direction="row"
      className={cn(
        'sticky -top-[1px] z-25 w-full',
        'overflow-x-auto min-h-[44px]',
        'bg-white px-2 pt-[1px]',
      )}
    >
      {categories.map((category) => {
        const isSelected = category.id === selectedId;

        return (
          <Category
            key={category.id}
            ref={isSelected ? activeRef : undefined}
            isSelected={isSelected}
            category={category}
            onSelect={() => handleSelect(category)}
          />
        );
      })}
    </Stack>
  );
};
