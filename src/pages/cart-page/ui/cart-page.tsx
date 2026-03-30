import { useCartStore } from '@/entities/cart';
import { useMerchantStore, useMerchantLazy } from '@/entities/merchant';
import { AddToCart } from '@/features/add-to-cart/ui/add-to-cart';
import { BackButton, Box, Stack, Typography } from '@/shared/ui';
import type { FC } from 'react';

export const CartPage: FC = () => {
  useMerchantLazy();
  const merchantInfo = useMerchantStore((state) => state.data);
   const { products } = useCartStore();
const cartItems = Object.values(products);

  return (
    <Box flexDirection="column">
      {/* header cart */}
      <Stack
        direction="horizontal"
        justify="between"
        align="center"
        className="ml-2 mr-4"
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
      <Stack className="p-4">
        <Typography.Body1>Страница находится в разработке</Typography.Body1>
      </Stack>

      <Stack className="p-4" spacing="sm">
        {cartItems.length > 0 ? (
          cartItems.map(({ product }) => (
            <Stack
              key={product.id}
              direction="horizontal"
              justify="between"
              align="center"
              className="p-3 border border-gray-100 rounded-2xl bg-white shadow-sm"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <Stack spacing="sm" className="mr-4">
                <Stack spacing="xs">
                  <Typography.Headline4>{`${product.price} ₽`}</Typography.Headline4>
                  <Typography.Body2Small>{product.name}</Typography.Body2Small>
                </Stack>

                <div className="relative h-10 w-[100px]">
                  <AddToCart
                    product={product}
                    className="!static !bottom-auto !right-auto"
                  />
                </div>
              </Stack>
            </Stack>
          ))
        ) : (
          <Typography.Body1>В корзине пока пусто</Typography.Body1>
        )}
      </Stack>

      <Stack className="p-4 mt-auto">
        <Typography.Body2Small>
          Страница находится в разработке
        </Typography.Body2Small>
      </Stack>
    </Box>
  );
};
