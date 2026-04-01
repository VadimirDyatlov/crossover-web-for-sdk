import { useShallow } from 'zustand/react/shallow';
import { useCartStore } from '@/entities/cart';
import { useMerchantStore, useMerchantLazy } from '@/entities/merchant';
import { CartProductCard } from '@/entities/product';
import { AddToCart } from '@/features/add-to-cart/ui/add-to-cart';
import { BackButton, Box, Stack, Typography } from '@/shared/ui';
import { useBackButton } from '@/shared/ui/back-button/lib/back-button';
import { useEffect, type FC } from 'react';
import { PayButton } from '@/features/pay-order';
import { AddOrderComment } from '@/features/add-order-comment';
// import type { FC } from 'react';

// TODO: В разработке.
export const CartPage: FC = () => {
  useMerchantLazy();
  const merchantInfo = useMerchantStore((state) => state.data);

  const productList = useCartStore(useShallow((state) => Object.values(state.productMap)));
  const handleBack = useBackButton()


  useEffect(() => {
    if (productList.length === 0) {
      handleBack();
    }
  }, [productList])

  return (
    <Box flexDirection="column">
      {/* header cart */}
      <Stack
        direction="horizontal"
        justify="between"
        align="center"
        className="ml-2 mr-4 mb-4"
      >
        <BackButton />
        <Stack align="center">
          <Typography.Headline3>Заказ</Typography.Headline3>
          <Typography.Body1>{merchantInfo?.address}</Typography.Body1>
        </Stack>
        <Stack className="w-9 h-9 rounded-full overflow-hidden">
          <img
            src={merchantInfo?.logoUrl}
            alt="logo"
            className="w-full h-full object-cove"
          />
        </Stack>
      </Stack>

      <Stack className="gap-0.5 p-0 m-[0_16px]">
        {productList.map(({ product }) => (
          <CartProductCard key={product.id} product={product}>
            <AddToCart product={product} />
          </CartProductCard>
        ))}
      </Stack>

      <AddOrderComment />

      <PayButton />
    </Box>
  );
};
