import { PayButton } from '@/features/pay-order';
import { AddOrderComment } from '@/features/add-order-comment';
import { CartHeader } from '@/widgets/header';
import { CartList } from '@/widgets/cart-list';
import { useMerchantLazy } from '@/entities/merchant';
import { Box, Stack } from '@/shared/ui';
import { useCartAutoExit } from '../model/cart-page';
import { type FC } from 'react';

export const CartPage: FC = () => {
  useMerchantLazy();
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
