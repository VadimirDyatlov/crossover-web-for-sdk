import { useSelectCategory } from '@/features/select-category';
import { Category } from '@/entities/category';
import { cn, useScrollIntoView } from '@/shared/lib';
import { Stack } from '@/shared/ui';
import type { CSSProperties, FC } from 'react';

export const CategoryList: FC = () => {
  const { categories, selectedId, handleSelect } = useSelectCategory();
  // Второй параметр — тип DOM-элемента, совпадает с forwardRef<HTMLButtonElement> в Category
  const activeRef = useScrollIntoView<string | undefined, HTMLButtonElement>(selectedId);

  return (
    <Stack
      direction="row"
      // position: -webkit-sticky — fallback для iOS WKWebView < 13, Tailwind генерирует только position: sticky
      style={{ position: '-webkit-sticky' as CSSProperties['position'] }}
      className={cn(
        'sticky -top-[1px] z-25 w-full',
        'overflow-x-auto overflow-y-hidden min-h-[44px] h-[44px]',
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
