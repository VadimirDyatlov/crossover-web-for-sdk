import type { FC } from 'react';
import { useOrderListLazy, useOrderStore } from '@/entities/order';
import { SupportBlock } from '@/features/call-support';
import { useAppNavigation } from '@/shared/lib';
import { Box, FullPageError, Typography } from '@/shared/ui';
import { OrdersHeader } from '@/widgets/header';
import { OrderDetailsModal } from '@/widgets/order-details-modal';
import { OrdersList } from '@/widgets/orders-list';

export const OrdersPage: FC = () => {
  useOrderListLazy();
  const error = useOrderStore((state) => state.orderList.error);
  const { openCatalog } = useAppNavigation();

  if (error) return <FullPageError onBack={openCatalog} actionLabel="Закрыть" />;

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
