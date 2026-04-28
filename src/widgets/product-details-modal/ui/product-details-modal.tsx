import type { FC } from 'react';
import { ProductDetails, useProductStore } from '@/entities/product';
import { AddToCartLarge } from '@/features/add-to-cart';
import { cn, MODAL } from '@/shared/lib';
import { useModalStore } from '@/shared/model';
import { FullPageError, Modal, Stack } from '@/shared/ui';
import { useProductModal } from '../model/product-details-modal';
import { ProductDetailsSkeleton } from './product-details-skeleton';

export const ProductDetailsModal: FC = () => {
  const { data, isLoading, error } = useProductStore((state) => state.productDetails);
  const { visibleModalName, closeModal } = useModalStore();
  const { handleClose } = useProductModal();

  const isOpen = visibleModalName === MODAL.PRODUCT_DETAILS;

  if (error) return <FullPageError onBack={handleClose} actionLabel="Назад" />;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {!data || isLoading ? (
        <ProductDetailsSkeleton />
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
