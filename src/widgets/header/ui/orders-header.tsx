import type { FC } from 'react';
import { NavigateBackButton } from '@/features/navigate-back';
import { Stack, Typography } from '@/shared/ui';

export const OrdersHeader: FC = () => {
  return (
    <Stack className="pt-[env(safe-area-inset-top)]">
      <Stack
        direction="row"
        align="center"
        justify="center"
        className="h-[44px] relative"
      >
        <NavigateBackButton className="absolute left-2" />
        <Typography.Headline3>Мои заказы</Typography.Headline3>
      </Stack>
    </Stack>
  );
};
