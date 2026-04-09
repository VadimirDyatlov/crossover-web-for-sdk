import { useCartStore, CartPreview } from '@/entities/cart';
import { useAppNavigation } from '@/shared/lib'; 
import { Button, Stack } from '@/shared/ui';
import type { FC } from 'react';

export const OpenCartButton: FC = () => {
  const { openCart } = useAppNavigation();
  const { totalPrice, totalQuantity } = useCartStore();

  if (totalQuantity === 0) return null;

  return (
    <Stack
      align="center"
      className="fixed bottom-[50px] left-0 right-0 z-50 pointer-events-none"
    >
      <Button
        onClick={openCart}
        className="h-[60px] px-[12px] w-fit rounded-[24px] pointer-events-auto"
      >
        <CartPreview price={totalPrice} />
      </Button>
    </Stack>
  );
};
