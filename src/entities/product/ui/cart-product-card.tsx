import { Stack, Typography } from "@/shared/ui";
import styles from './cart-product-card.module.css';
import type { types } from "@/shared/api";
import type { FC, ReactNode } from "react";

interface CartProductCardProps {
  product: types.Product;
  children: ReactNode;
}

export const CartProductCard: FC<CartProductCardProps> = (props) => {
  const { product, children } = props;
  const parts = product.name.split(' ');
  const weight = parts.pop(); 
  const name = parts.join(' '); 

  return (
    <Stack
      key={product.id}
      direction="horizontal"
      align="center"
      spacing="md"
      className={styles.cardContainer}
    >
      <div className={styles.imageContainer}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.image}
        />
      </div>
      <Stack className="relative w-[100%]">
        <Stack className="mt-[4px]">
          <Typography.Body2Small>{name}</Typography.Body2Small>
          <Typography.Body2Small>{weight}</Typography.Body2Small>
        </Stack>
        <Stack direction="horizontal" align="center" justify="between">
          <Typography.Headline4>{`${product.price} ₽`}</Typography.Headline4>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}
