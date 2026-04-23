import type { FC } from 'react';
import { ProductDetails, useProductStore } from '@/entities/product';
import { AddToCartLarge } from '@/features/add-to-cart';
import { cn, MODAL } from '@/shared/lib';
import { useModalStore } from '@/shared/model';
import { Modal, Skeleton, Stack } from '@/shared/ui';

export const ProductDetailsModal: FC = () => {
  const { visibleModalName, closeModal } = useModalStore();
  const { data, isLoading } = useProductStore((state) => state.productDetails);

  // if (visibleModalName !== MODAL.PRODUCT_DETAILS) return null;
  const isOpen = visibleModalName === MODAL.PRODUCT_DETAILS;

  // if (isLoading) {
  //   return (
  //     <Stack spacing="xs">
  //       <Skeleton height="350px" width="350px" />
  //       <Skeleton height="50px" width="350px" />
  //       <Skeleton height="50px" width="350px" />
  //       <Skeleton height="50px" width="350px" />
  //     </Stack>
  //   );
  // }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {!data || isLoading ? (
        <Stack spacing="xs">
          <Skeleton height="350px" width="350px" />
          <Skeleton height="50px" width="350px" />
          <Skeleton height="50px" width="350px" />
          <Skeleton height="50px" width="350px" />
        </Stack>
      ) : (
        <ProductDetails>
          <Stack
            align="center"
            className={cn(
              'fixed left-0 right-0 z-50 px-4',
              // "bottom-[34px]",
              'bottom-[calc(34px+env(safe-area-inset-bottom,0px))]',
            )}
          >
            <AddToCartLarge product={data} />
          </Stack>
        </ProductDetails>
      )}
    </Modal>
  );
};
