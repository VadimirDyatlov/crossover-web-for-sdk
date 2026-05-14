import type { types } from '@/shared/api';
import { useProductStore } from '@/entities/product';
import { MODAL, trackAction, USER_ACTION } from '@/shared/lib';
import { useModalStore } from '@/shared/model';

export const useOpenProduct = () => {
  const { showModal } = useModalStore();
  // Без селектора компонент ре-рендерится при любом изменении productStore (загрузка, данные)
  const fetchProductDetails = useProductStore((state) => state.fetchProductDetails);

  return (product: types.Product) => {
    // Открытие карточки товара — событие в нативку для аналитики просмотров
    trackAction(USER_ACTION.PRODUCT_OPEN, {
      productId: product.id,
      productName: product.name,
    });
    showModal(MODAL.PRODUCT_DETAILS);
    fetchProductDetails(product.id);
  };
};
