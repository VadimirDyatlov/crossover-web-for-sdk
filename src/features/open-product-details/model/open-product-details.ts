import { useProductStore } from '@/entities/product';
import { useModalStore } from '@/shared/model';
import { MODAL } from '@/shared/lib';
import type { types } from '@/shared/api';

export const useOpenProduct = () => {
  const { showModal } = useModalStore();
  // Без селектора компонент ре-рендерится при любом изменении productStore (загрузка, данные)
  const fetchProductDetails = useProductStore((state) => state.fetchProductDetails);

  return (product: types.Product) => {
    showModal(MODAL.PRODUCT_DETAILS);
    fetchProductDetails(product.id);
  };
};
