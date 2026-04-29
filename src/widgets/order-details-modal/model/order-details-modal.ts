import { useOrderStore } from "@/entities/order";
import { useModalStore } from "@/shared/model";

export const useOrderModal = () => {
  const { closeModal } = useModalStore();
  const resetError = useOrderStore((state) => state.resetOrderDetailsError);

  const handleClose = () => {
    closeModal();
    resetError();
  };

  return { handleClose };
};
