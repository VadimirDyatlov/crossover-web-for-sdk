import { OrderDetails, useOrderStore } from "@/entities/order";
import { OrderProductCard } from "@/entities/product";
import { useModalStore } from "@/shared/model";
import { Modal, Stack } from "@/shared/ui";
import { MODAL } from "@/shared/lib";
import type { FC } from "react";

export const OrderDetailsModal: FC = () => {
  const { data } = useOrderStore((state) => state.orderDetails);
  const { visibleModalName, closeModal } = useModalStore();

  if (visibleModalName !== MODAL.ORDER_DETAILS) return null;

  return (
    <Modal onClose={closeModal}>
      <OrderDetails>
        <Stack className="">
          {data.map(({ product, quantity }) => (
            <OrderProductCard product={product} quantity={quantity} />
          ))}
        </Stack>
      </OrderDetails>
    </Modal>
  );
};
