import type { FC, ReactNode } from 'react';
import { OrderCard, useOrderStore } from '@/entities/order';
import { useOpenOrder } from '@/features/open-order-details';
import { useAppNavigation } from '@/shared/lib';
import { FullPageError, Stack } from '@/shared/ui';
import { OrdersListSkeleton } from './orders-list-skeleton';

interface OrdersListProps {
  children?: ReactNode;
}

export const OrdersList: FC<OrdersListProps> = ({ children }) => {
  const { data, isLoading, error } = useOrderStore((state) => state.orderList);
  const { openCatalog } = useAppNavigation();
  const handleOpen = useOpenOrder();

  if (error) return <FullPageError onBack={openCatalog} actionLabel="Закрыть" />;

  return (
    <Stack
      spacing="sm"
      className="p-4 pb-[calc(80px+env(safe-area-inset-bottom,0px))] flex-1 min-h-0 overflow-y-auto"
    >
      {isLoading ? (
        <OrdersListSkeleton />
      ) : (
        data.map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
            onClick={() => handleOpen(order)}
          />
        ))
      )}
      {children}
    </Stack>
  );
};
