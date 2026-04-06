import { useOrderStore } from "@/entities/order";
import { useModalStore } from "@/shared/model";
import { MODAL } from "@/shared/lib";
import type { types } from "@/shared/api";

export const useOpenOrder = () => {
  const { showModal } = useModalStore();
  const { fetchOrderDetails, setSelectedOrder } = useOrderStore();

  return (order: types.Order) => {
    showModal(MODAL.ORDER_DETAILS);
    setSelectedOrder(order);
    fetchOrderDetails(order.orderId);
  };
};