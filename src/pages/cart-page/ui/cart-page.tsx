import type { FC } from 'react';
import { AddOrderComment } from '@/features/add-order-comment';
import { PayButton } from '@/features/pay-order';
import { Box, Stack } from '@/shared/ui';
import { CartList } from '@/widgets/cart-list';
import { CartHeader } from '@/widgets/header';
import { useCartAutoExit } from '../model/cart-page';

export const CartPage: FC = () => {
  useCartAutoExit();

  return (
    <Box flexDirection="column" className="h-dvh overflow-hidden">
      <CartHeader />
      <Stack className="min-h-0 overflow-y-auto pb-[env(safe-area-inset-bottom,0px)]">
        <CartList />
        <AddOrderComment />
      </Stack>
      <PayButton />
    </Box>
  );
};
