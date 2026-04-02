import { useShallow } from 'zustand/react/shallow';
import { useCartStore } from '@/entities/cart';
import { useMerchantStore, useMerchantLazy } from '@/entities/merchant';
import { CartProductCard } from '@/entities/product';
import { AddToCart } from '@/features/add-to-cart/ui/add-to-cart';
import { BackButton, Box, SmartImage, Stack, Typography } from '@/shared/ui';
import { useBackButton } from '@/shared/ui/back-button/lib/back-button';
import { useEffect, type FC } from 'react';
import { PayButton } from '@/features/pay-order';
import { AddOrderComment } from '@/features/add-order-comment';
import { cn } from '@/shared/lib';
import styles from './cart-page.module.css';

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
//  border border-red-500
  return (
    <Box flexDirection="column" className="overflow-y-auto">
      {/* widgets/cart-header*/}
      <Stack
        direction="horizontal"
        justify="between"
        align="center"
        // className="pl-2 pr-4 pb-4 fixed top-0 left-0 right-0 bg-white z-25"
        className={cn(
          'pl-2 pr-4 pb-4 fixed top-0 left-0 right-0 bg-white z-25',
          styles.container,
        )}
      >
        <BackButton />
        <Stack align="center">
          <Typography.Headline3>Заказ</Typography.Headline3>
          <Typography.Body1>{merchantInfo?.address}</Typography.Body1>
        </Stack>
        <SmartImage
          src={merchantInfo?.logoUrl}
          alt="logo"
          className='w-9 h-9 rounded-full overflow-hidden'
          imgClassName="w-full h-full object-cove"
        />
      </Stack>

      {/* widgets/cart-list */}
      <Stack
        // className="gap-0.5 p-0 m-[60px_16px_0_16px]"
        className={cn('gap-0.5 m-[0_16px_0_16px]', styles.cartList)}
      >
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
