import { OrderCard, useOrderListLazy } from "@/entities/order";
import { Stack } from "@/shared/ui";
import type { FC, ReactNode } from "react";

interface OrdersListProps {
  children?: ReactNode;
}

// TODO: Добавить isLoading и скелетон
export const OrdersList: FC<OrdersListProps> = ({ children }) => {
  const { data } = useOrderListLazy();

  return (
    <Stack
      className="p-4 pb-20 flex-1 min-h-0 overflow-y-auto" 
      spacing="sm"
    >
      {data.map((order) => (
        // TODO: Передавать фичу открытия модального окна в OrderCard.
        <OrderCard key={order.orderId} order={order} />
      ))}
      {children}
    </Stack>
  );
};