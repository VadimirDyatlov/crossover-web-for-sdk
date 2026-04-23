import type { FC } from 'react';
import { useOrderListLazy } from '@/entities/order';
import { SupportBlock } from '@/features/call-support';
import { Box, Typography } from '@/shared/ui';
import { OrdersHeader } from '@/widgets/header';
import { OrderDetailsModal } from '@/widgets/order-details-modal';
import { OrdersList } from '@/widgets/orders-list';

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
      </OrdersList>
      <OrderDetailsModal />
    </Box>
  );
};
