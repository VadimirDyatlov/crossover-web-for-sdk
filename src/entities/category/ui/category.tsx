import { Button, Typography } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { forwardRef } from 'react';
import type { types } from '@/shared/api';

interface CategoryProps {
  isSelected: boolean;
  category: types.Category;
  onSelect: () => void;
}

export const Category = forwardRef<HTMLButtonElement, CategoryProps>((props, ref) => {
  const { isSelected, category, onSelect } = props;

  return (
    <Button
      ref={ref}
      className={cn(
        'min-h-[44px] p-2 hover:!bg-transparent transition-all duration-500',
        isSelected ? 'bg-transparent text-black' : 'bg-transparent text-black/55',
      )}
      onClick={onSelect}
    >
      <Typography.Headline4>{category.name}</Typography.Headline4>
    </Button>
  );
});

Category.displayName = 'Category';