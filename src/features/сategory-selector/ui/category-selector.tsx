import { Stack, Typography, Button } from '@/shared/ui';
import { cn } from '@/shared/lib';
import type { FC } from 'react';
import type { types } from '@/shared/api';

interface CategorySelectorProps {
  categories: types.Category[];
  selectedCategory: types.Category | null;
  onSelect: (category: types.Category) => void;
}

export const CategorySelector: FC<CategorySelectorProps> = (props) => {
  const { categories, selectedCategory, onSelect } = props;

  return (
    <Stack
      direction="horizontal"
      spacing="md"
      className="mt-3.5 mb-3.5 pl-4 overflow-x-auto [scrollbar-width:none]"
    >
      {categories.map((category) => {
        const { id, name } = category;
        const isSelected = selectedCategory?.id === id;

        return (
          <Button
            key={id}
            className={cn(
              'rounded-xl',
              !isSelected && 'bg-white text-black border border-[rgb(240,240,242)]',
            )}
            onClick={() => onSelect(category)}
          >
            <Typography.Body2Small>{name}</Typography.Body2Small>
          </Button>
        );
      })}
    </Stack>
  );
};
