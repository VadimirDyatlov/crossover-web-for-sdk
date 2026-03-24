import { Box, Button, Typography } from '@/shared/ui';
import { routerPaths, useAnimatedNavigate } from '@/shared/lib';
import Basket from '../icon/basket.svg';
import type { FC } from 'react';

export const CartButton: FC = () => {
  const navigate = useAnimatedNavigate();

  return (
    <Box className="fixed justify-center bottom-[50px] z-20 h-[50px]">
      <Button 
        className="h-[60px] rounded-[24px]"
        onTouchStart={() => navigate(routerPaths.cartPage)}
      >
        <img src={Basket} alt="basket" />
        <Typography.Headline4>{`123 ₽`}</Typography.Headline4>
      </Button>
    </Box>
  );
};
