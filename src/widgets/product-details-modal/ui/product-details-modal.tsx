import { AddToCart } from "@/features/add-to-cart";
import { ProductDetails, useProductStore } from "@/entities/product";
import { useModalStore } from "@/shared/model";
import { Modal, Skeleton, Stack } from "@/shared/ui";
import { MODAL } from "@/shared/lib";
import type { FC } from "react";

export const ProductDetailsModal: FC = () => {
  const { visibleModalName, closeModal } = useModalStore();
  const { data, isLoading } = useProductStore((state) => state.productDetails);

  if (visibleModalName !== MODAL.PRODUCT_DETAILS) return null;

  if (isLoading) {
    return (
      <Stack spacing="xs">
        <Skeleton height="350px" width="350px" />
        <Skeleton height="50px" width="350px" />
        <Skeleton height="50px" width="350px" />
        <Skeleton height="50px" width="350px" />
      </Stack>
    );
  }

  return (
    <Modal onClose={closeModal}>
      <ProductDetails>
        {/* TODO: Доработать в соответствии смакетом. */}
        <Stack direction="row" justify="center">
          <AddToCart product={data!} />
        </Stack>
      </ProductDetails>
    </Modal>
  );
};
