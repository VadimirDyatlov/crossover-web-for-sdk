import type { FC } from 'react';
import { Stack, Typography } from '@/shared/ui';
import Basket from '../icon/basket.svg?react';

interface CartPreviewProps {
  price: number;
}

export const CartPreview: FC<CartPreviewProps> = ({ price }) => {
  return (
    <Stack direction="row" spacing="sm" align="center">
      <Basket />
      <Typography.Headline4
        key={price}
        className="will-change-[opacity,filter] animate-price-fade"
      >
        {`${price.toLocaleString('ru-RU')} ₽`}
      </Typography.Headline4>
    </Stack>
  );
};
