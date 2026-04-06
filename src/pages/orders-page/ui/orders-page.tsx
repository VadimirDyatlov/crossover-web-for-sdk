import { useOrderListLazy } from '@/entities/order';
import { SupportBlock } from '@/features/call-support';
import { Box, Typography } from '@/shared/ui';
import { OrdersHeader } from '@/widgets/header';
import { OrdersList } from '@/widgets/orders-list';
import type { FC } from 'react';

export const OrdersPage: FC = () => {
  useOrderListLazy();

  return (
    <Box flexDirection="column" className="h-dvh overflow-hidden">
      <OrdersHeader />
      <OrdersList>
        <SupportBlock className="mt-2">
          {(Link) => (
            <Typography.Body1>
              По вопросам оплаты заказов звоните <Link />
            </Typography.Body1>
          )}
        </SupportBlock>
        {/* <div className="h-[80px] shrink-0" />  */}
        <div
          style={{ height: 'calc(80px + env(safe-area-inset-bottom))' }}
          className="shrink-0 w-full"
        />
      </OrdersList>
    </Box>
  );
};
