import { useCategoryStore, useScrollToSelected } from '../model/category';
import { Button, Typography } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { type FC } from 'react';
import type { types } from '@/shared/api';

interface CategoryProps {
  category: types.Category;
  onClick: (category: types.Category) => void;
}

export const Category: FC<CategoryProps> = (props) => {
  const { category, onClick } = props;

  const { selectedCategory } = useCategoryStore();
  const activeButtonRef = useScrollToSelected();
  const isSelected = selectedCategory?.id === category.id;

  return (
    <Button
      className={cn(
        'p-2',
        'hover:!bg-transparent',
        'transition-all duration-500',
        isSelected ? 'bg-transparent text-black' : 'bg-transparent text-black/55',
      )}
      ref={isSelected ? activeButtonRef : null}
      onClick={() => onClick(category)}
    >
      <Typography.Headline4>{category.name}</Typography.Headline4>
    </Button>
  );
};
