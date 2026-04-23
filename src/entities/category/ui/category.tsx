import type { types } from '@/shared/api';
import { cn } from '@/shared/lib';
import { Button, Typography } from '@/shared/ui';

interface CategoryProps {
  isSelected: boolean;
  category: types.Category;
  onSelect: () => void;
}

export const Category = ({
  ref,
  ...props
}: CategoryProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const { isSelected, category, onSelect } = props;

  return (
    <Button
      ref={ref}
      className={cn(
        'h-[44px] p-2 hover:!bg-transparent transition-all duration-500',
        isSelected ? 'bg-transparent text-black' : 'bg-transparent text-black/55',
      )}
      onClick={onSelect}
    >
      <Typography.Headline4>{category.name}</Typography.Headline4>
    </Button>
  );
};

Category.displayName = 'Category';
