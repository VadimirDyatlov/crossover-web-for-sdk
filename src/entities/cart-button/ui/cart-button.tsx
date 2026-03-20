import { Box, Button, Typography } from '@/shared/ui';
import Basket from '../icon/basket.svg';
import type { FC } from 'react';

export const CartButton: FC = () => {

  return (
    <Box className="fixed justify-center bottom-[50px] z-20 h-[50px]">
      <Button className="h-[60px] rounded-[24px]">
        <img src={Basket} alt="basket" />
        <Typography.Headline4>{`123 ₽`}</Typography.Headline4>
      </Button>
    </Box>
  );
};
