import { useLocation } from 'wouter';
import { Stack, Typography } from '@/shared/ui';
import { CloseIcon } from '@/shared/assets/icons';
import Basket from '../icon/header-basket.svg';
import { routerPaths } from '@/shared/lib/router-paths';
import type { FC } from 'react';

export const Header: FC = () => {
  const navigate = useLocation()[1];

  return (
    <Stack direction="horizontal" justify="between" className="ml-2 mr-2">
      <button
        className="flex items-center justify-center p-2 cursor-pointer bg-none border-none"
        onTouchStart={() => navigate('/close')}
      >
        <img src={CloseIcon} alt="close-icon" />
      </button>
      <button
        className="cursor-pointer p-2 flex items-center gap-2 bg-none border-none"
        onClick={() => navigate(routerPaths.myOrders)}
      >
        <Typography.Body1>Мои заказы</Typography.Body1>
        <img src={Basket} alt="my-orders" />
      </button>
    </Stack>
  );
};
