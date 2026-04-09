
import { useAddToCart } from "../model/add-to-cart";
import { Button, Stack } from "@/shared/ui";
import { cn } from "@/shared/lib";
import styles from './add-to-cart.module.css';
import type { FC, MouseEvent } from "react";
import type { types } from "@/shared/api";

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
        styles.addToCartButton,
        isExpanded ? [styles.expanded] : [styles.collapsed],
        props.className,
      )}
    >
      {isExpanded ? (
        <>
          <Button
            variant="ghost"
            className={styles.controlButton}
            onClick={handleDecrement}
          >
            -
          </Button>
          <span key={count} className={styles.quantity}>
            {count}
          </span>
        </>
      ) : null}
      
      <Button
        variant="ghost"
        className={cn(styles.controlButton, styles.plusIcon)}
        onClick={handleIncrement}
      >
        +
      </Button>
    </Stack>
  );
};
