import { useLocation } from "wouter";
import { Stack, Typography } from '@/shared/ui';
import { CloseIcon } from '@/shared/assets/icons';
import { routerPaths } from '@/shared/lib/router-paths';
import type { FC } from 'react';

export const Header: FC = () => {
  const navigate = useLocation()[1];

  return (
    <Stack direction="horizontal" justify="between" className="m-3">
      <button
        className="flex items-center justify-center p-0 cursor-pointer bg-none border-none"
        onClick={() => navigate('/close')}
      >
        <img src={CloseIcon} alt="close-icon" />
      </button>
      <button
        className="cursor-pointer bg-none border-none"
        onClick={() => navigate(routerPaths.myOrders)}
      >
        <Typography.Body1>Мои заказы</Typography.Body1>
      </button>
    </Stack>
  );
};
