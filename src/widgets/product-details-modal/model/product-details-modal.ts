import { useProductStore } from "@/entities/product";
import { useModalStore } from "@/shared/model";

export const useProductModal = () => {
  const { closeModal } = useModalStore();
  const resetError = useProductStore((state) => state.resetProductDetailsError);

  const handleClose = () => {
    closeModal();
    resetError();
  };

  return { handleClose };
};
