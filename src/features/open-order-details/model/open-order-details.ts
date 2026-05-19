import type { types } from '@/shared/api';
import { useOrderStore } from '@/entities/order';
import { MODAL, trackAction, USER_ACTION } from '@/shared/lib';
import { useModalStore } from '@/shared/model';

export const useOpenOrder = () => {
  const { showModal } = useModalStore();
  const { fetchOrderDetails, setSelectedOrder } = useOrderStore();

  return (order: types.Order) => {
    // Открытие деталей заказа — событие в нативку для аналитики
    trackAction(USER_ACTION.ORDER_OPEN, { orderId: order.orderId });
    showModal(MODAL.ORDER_DETAILS);
    setSelectedOrder(order);
    fetchOrderDetails(order.orderId);
  };
};
