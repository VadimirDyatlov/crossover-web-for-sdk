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
    <Box flexDirection="column" className="h-[100svh]">
      <CatalogBar/>
      <ProductBlock />
      {/* TODO: CartButton это widgets или features. */}
      <Cart /> 

      {visibleModalName === MODAL.PRODUCT_DETAILS ? (
        <Modal>
          {/* TODO: ProductDetails это widgets? */}
          <ProductDetails />
        </Modal>
      ) : null}
    </Box>
  );
};
