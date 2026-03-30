import { useMerchantLazy } from '@/entities/merchant';
import { useModal } from '@/shared/model';
import { CatalogBar } from '@/widgets/catalog-bar';
import { ProductBlock } from '@/widgets/product-block';
import { Modal } from '@/features/modal';
import { ProductDetails } from '@/entities/product';
import { Cart } from '@/entities/cart';
import { Box } from '@/shared/ui';
import { MODAL } from '@/shared/lib/constants';
import type { FC } from 'react';

export const CatalogPage: FC = () => {
  useMerchantLazy();
  
  const { visibleModalName } = useModal();

  return (
    <Box flexDirection="column" className="h-[100vh]">
      <CatalogBar/>
      <ProductBlock />
      <Cart />

      {visibleModalName === MODAL.PRODUCT_DETAILS ? (
        <Modal>
          <ProductDetails />
        </Modal>
      ) : null}
    </Box>
  );
};
