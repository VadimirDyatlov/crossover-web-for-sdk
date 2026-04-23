import type { types } from '@/shared/api';
import { useOrderStore } from '@/entities/order';
import { MODAL } from '@/shared/lib';
import { useModalStore } from '@/shared/model';

export const useOpenOrder = () => {
  const { showModal } = useModalStore();
  const { fetchOrderDetails, setSelectedOrder } = useOrderStore();

  return (order: types.Order) => {
    showModal(MODAL.ORDER_DETAILS);
    setSelectedOrder(order);
    fetchOrderDetails(order.orderId);
  };
};
