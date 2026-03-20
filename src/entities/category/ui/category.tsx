import { useCategory } from '../model/category';
import { Button, Typography } from '@/shared/ui';
import { cn } from '@/shared/lib';
import type { FC } from 'react';

export const Category: FC<any> = (props) => {
  const { category } = props;

  const { selectedCategory, setSelectedCategory } = useCategory();
  const isSelected = selectedCategory?.id === category.id;

  return (
    <Button
      className={cn(
        'rounded-xl',
        !isSelected && 'bg-white text-black border border-[rgb(240,240,242)]',
      )}
      onClick={() => setSelectedCategory(category)}
    >
      <Typography.Body2Small>{category.name}</Typography.Body2Small>
    </Button>
  );
};
