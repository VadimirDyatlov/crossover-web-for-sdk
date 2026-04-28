import type { FC } from 'react';
import { OrderDetails, useOrderStore } from '@/entities/order';
import { OrderProductCard } from '@/entities/product';
import { MODAL } from '@/shared/lib';
import { useModalStore } from '@/shared/model';
import { FullPageError, Modal, Stack } from '@/shared/ui';
import { useOrderModal } from '../model/order-details-modal';
import { OrderDetailsSkeleton } from './order-details-skeleton';

export const OrderDetailsModal: FC = () => {
  const { data, isLoading, error } = useOrderStore((state) => state.orderDetails);
  const { visibleModalName, closeModal } = useModalStore();
  const { handleClose } = useOrderModal();

  const isOpen = visibleModalName === MODAL.ORDER_DETAILS;

  if (error) return <FullPageError onBack={handleClose} actionLabel="Назад" />;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {isLoading ? (
        <OrderDetailsSkeleton />
      ) : (
        <OrderDetails>
          <Stack>
            {data.map(({ product, quantity }) => (
              <OrderProductCard
                key={product.id}
                product={product}
                quantity={quantity}
              />
            ))}
          </Stack>
        </OrderDetails>
      )}
    </Modal>
  );
};
