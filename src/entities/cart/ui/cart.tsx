import { useCartStore } from '../model/cart';
import { Box, Button, Typography } from '@/shared/ui';
import { routerPaths, useAnimatedNavigate } from '@/shared/lib';
import Basket from '../icon/basket.svg?react';
import styles from './cart.module.css';
import type { FC } from 'react';

export const Cart: FC = () => {
  const navigate = useAnimatedNavigate();
  const { totalPrice, totalQuantity } = useCartStore();

  if (totalQuantity === 0) return null;

  return (
    <Box className={styles.cartContainer}>
      {/* TODO: Button это фича */}
      <Button 
        className={styles.cartButton}
        onClick={() => navigate(routerPaths.cartPage)}
        >
        {/* TODO: Это сущность */}
        <Basket /> 
        <Typography.Headline4>{`${totalPrice} ₽`}</Typography.Headline4>
      </Button>
    </Box>
  );
};
