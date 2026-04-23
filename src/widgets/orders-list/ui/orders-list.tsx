import type { FC, ReactNode } from 'react';
import { OrderCard, useOrderStore } from '@/entities/order';
import { useOpenOrder } from '@/features/open-order-details';
import { Stack } from '@/shared/ui';

interface OrdersListProps {
  children?: ReactNode;
}

// TODO: Добавить isLoading и скелетон
export const OrdersList: FC<OrdersListProps> = ({ children }) => {
  const { data } = useOrderStore((state) => state.orderList);
  const handleOpen = useOpenOrder();

  return (
    <Stack spacing="sm" className="p-4 pb-20 flex-1 min-h-0 overflow-y-auto">
      {data.map((order) => (
        <OrderCard
          key={order.orderId}
          order={order}
          onClick={() => handleOpen(order)}
        />
      ))}
      {children}
    </Stack>
  );
};
