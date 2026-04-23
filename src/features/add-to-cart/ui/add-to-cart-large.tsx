import { Button, Stack, Typography } from "@/shared/ui";
import { useAddToCart } from "../model/add-to-cart";
import { cn } from "@/shared/lib";
import MinusIcon from '../icon/minus.svg?react';
import PlusIcon from '../icon/plus.svg?react';
import type { FC } from "react";
import type { types } from '@/shared/api';

const iconButtonClasses = cn(
  '!p-0 h-10 w-10 text-white', 
  'will-change-transform animate-fade-in',
);
const iconClasses = 'active:opacity-50';

interface AddToCartLargeProps {
  product: types.Product | types.ProductDetail;
  className?: string;
}


export const AddToCartLarge: FC<AddToCartLargeProps> = (props) => {
  const { product, className } = props;
  const { count, isExpanded, handleIncrement, handleDecrement } = useAddToCart(product);

  return (
    <Stack
      key={isExpanded ? 'expanded' : 'collapsed'}
      direction="row"
      align="center"
      justify={isExpanded ? 'between' : 'center'}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      className={cn(
        'h-[60px] w-full rounded-[20px] bg-[rgb(49,55,59)] text-white px-6', // Layout
        'transition-all duration-300 ease-in-out select-none', // Behavior
        'will-change-[width,transform]', // GPU hint
        className,
      )}
    >
      {isExpanded && (
        <Button
          variant="ghost"
          className={iconButtonClasses}
          onClick={handleDecrement}
        >
          <MinusIcon className={iconClasses} />
        </Button>
      )}
      <Stack
        direction="row"
        spacing="xs"
        align="center"
        className="animate-fade-in will-change-transform"
      >
        {isExpanded ? (
          <>
            <Typography.Body1
              key={count}
              className="text-[17px] will-change-transform animate-fade-in-down"
            >
              {count}
            </Typography.Body1>
            <Typography.Body1 className="text-[17px]">
              {` × ${product.price.toLocaleString('ru-RU')} ₽`}
            </Typography.Body1>
          </>
        ) : (
          <Typography.Body1 className="text-[17px] font-semibold animate-fade-in">
            {`${product.price.toLocaleString('ru-RU')} ₽`}
          </Typography.Body1>
        )}
      </Stack>
      <Button
        variant="ghost"
        className={iconButtonClasses}
        onClick={handleIncrement}
      >
        <PlusIcon className={iconClasses} />
      </Button>
    </Stack>
  );
};
