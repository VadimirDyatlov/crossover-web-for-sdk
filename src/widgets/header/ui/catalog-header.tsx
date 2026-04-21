import { Button, Stack, Typography } from '@/shared/ui';
import { useAppNavigation } from '@/shared/lib';
import { CloseIcon } from '@/shared/assets/icons';
import Basket from '../icon/header-basket.svg?react';
import type { FC } from 'react';

export const CatalogHeader: FC = () => {
  const { closeApp, openMyOrders } = useAppNavigation();

  return (
    <Stack className="pt-[env(safe-area-inset-top)]">
      <Stack
        direction="row"
        align="center"
        justify="between"
        className="h-[44px] pl-2 pr-2"
      >
        <Button variant="ghost" className="!p-2" onClick={closeApp}>
          <CloseIcon />
        </Button>
        <Button variant="ghost" className="!p-2" onClick={openMyOrders}>
          <Typography.Body1>Мои заказы</Typography.Body1>
          <Basket />
        </Button>
      </Stack>
    </Stack>
  );
};
