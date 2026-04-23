import { useShallow } from 'zustand/shallow';
import { AddToCart } from '@/features/add-to-cart';
import { useCartStore } from '@/entities/cart';
import { CartProductCard } from '@/entities/product';
import { Stack } from '@/shared/ui';
import type { FC } from 'react';

export const CartList: FC = () => {
  const productList = useCartStore(
    useShallow((state) => Object.values(state.productMap)),
  );

  return (
    <Stack className="gap-0.5 pt-4 px-4">
      {productList.map(({ product }) => (
        <CartProductCard key={product.id} product={product}>
          <AddToCart product={product} />
        </CartProductCard>
      ))}
    </Stack>
  );
};
