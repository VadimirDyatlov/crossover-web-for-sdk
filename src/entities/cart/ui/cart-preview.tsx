import { Stack, Typography } from '@/shared/ui';
import Basket from '../icon/basket.svg?react';
import type { FC } from 'react';

interface CartPreviewProps {
  price: number;
}

export const CartPreview: FC<CartPreviewProps> = (props) => {
  return (
    <Stack direction="row" spacing="sm" align="center">
      <Basket />
      <Typography.Headline4>
        {`${props.price.toLocaleString('ru-RU')} ₽`}
      </Typography.Headline4>
    </Stack>
  );
};
