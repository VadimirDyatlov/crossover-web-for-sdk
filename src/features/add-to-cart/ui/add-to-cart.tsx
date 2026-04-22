
import { useAddToCart } from "../model/add-to-cart";
import { Button, Stack } from "@/shared/ui";
import { cn } from "@/shared/lib";
import type { FC, MouseEvent } from "react";
import type { types } from "@/shared/api";

const controlButtonClasses = cn(
  'w-10 h-10 flex items-center justify-center !p-0',
  'text-[24px] active:opacity-70',
);

interface AddToCartProps {
  product: types.Product | types.ProductDetail;
  className?: string;
}

export const AddToCart: FC<AddToCartProps> = (props) => {
  const { count, isExpanded, handleIncrement, handleDecrement } = useAddToCart(
    props.product,
  );

  return (
    <Stack
      direction="row"
      align="center"
      justify={isExpanded ? 'between' : 'center'}
      onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
      className={cn(
        'z-20 h-10 overflow-hidden bg-white text-[#383838]! rounded-[24px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]',
        'transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[width]',
        isExpanded ? 'w-[100px]' : 'w-[40px]',
        props.className,
      )}
    >
      {isExpanded ? (
        <>
          <Button
            variant="ghost"
            className={controlButtonClasses}
            onClick={handleDecrement}
          >
            -
          </Button>
          <span
            key={count}
            className={cn(
              'inline-block min-w-[20px] text-center',
              'font-bold text-[16px]',
              'will-change-transform',
              // 'animate-[fadeInDown_0.25s_cubic-bezier(0.2,0.8,0.2,1)_forwards]',
              'animate-fade-in-down'
            )}
          >
            {count}
          </span>
        </>
      ) : null}

      <Button
        variant="ghost"
        className={cn(controlButtonClasses, 'translate-y-[1px]')}
        onClick={handleIncrement}
      >
        +
      </Button>
    </Stack>
  );
};
