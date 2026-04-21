import { Button, Stack, Typography } from "@/shared/ui";
import { useAddToCart } from "../model/add-to-cart";
import type { FC } from "react";
import type { types } from "@/shared/api";
import MinusIcon from '../icon/minus.svg?react';
import PlusIcon from '../icon/plus.svg?react';
import { cn } from "@/shared/lib";

interface AddToCartLargeProps {
  product: types.Product | types.ProductDetail;
  className?: string;
}

// TODO: В работе
export const AddToCartLarge: FC<AddToCartLargeProps> = (props) => {
  const { product, className } = props;
  const { count, isExpanded, handleIncrement, handleDecrement } =
    useAddToCart(product);

  return (
    <Stack
      direction="row"
      align="center"
      justify={isExpanded ? 'between' : 'center'}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      className={cn(
        'h-[60px] w-full rounded-[20px] bg-[rgb(49,55,59)] text-white px-6',
        'transition-all duration-300 ease-in-out',
        className,
      )}
    >
      {isExpanded ? (
        <>
          <Button
            variant="ghost"
            className="!p-0 h-10 w-10 text-white active:opacity-50"
            onClick={handleDecrement}
          >
            <MinusIcon />
          </Button>

          <Stack
            direction="row"
            spacing="xs"
            align="center"
            className="animate-in fade-in zoom-in duration-200"
          >
            <Typography.Body1 className={cn("text-[17px]")}>{`${count} × ${product.price.toLocaleString('ru-RU')} ₽`}</Typography.Body1>
          </Stack>
        </>
      ) : (
        <Typography.Body1 className="text-[17px]">
          {`${product.price.toLocaleString('ru-RU')} ₽`}
        </Typography.Body1>
      )}

      <Button
        variant="ghost"
        className="!p-0 h-10 w-10 text-white active:opacity-50"
        onClick={handleIncrement}
      >
        <PlusIcon />
      </Button>
    </Stack>
  );
};
