import { useProductStore } from '@/entities/product';
import { useModalStore } from '@/shared/model';
import { MODAL } from '@/shared/lib';
import type { types } from '@/shared/api';

export const useOpenProduct = () => {
  const { showModal } = useModalStore();
  const { fetchProductDetails } = useProductStore();

  return (product: types.Product) => {
    showModal(MODAL.PRODUCT_DETAILS);
    fetchProductDetails(product.id);
  };
};
