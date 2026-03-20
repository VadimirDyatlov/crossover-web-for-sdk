import { useEffect } from 'react';
import { useMerchantInfo } from '@/entities/merchant-info';
import { useModal } from '@/shared/model';
import { CatalogBar } from '@/widgets/catalog-bar';
import { ProductsBlock } from '@/features/products-block';
import { Modal } from '@/features/modal';
import { ProductDetails } from '@/entities/product-details';
import { CartButton } from '@/entities/cart-button';
import { Box } from '@/shared/ui';
import { MODAL } from '@/shared/lib/constants';
import type { FC } from 'react';

export const CatalogPage: FC = () => {
  const { fetchMerchant } = useMerchantInfo();
  
  const { visibleModalName } = useModal();

  useEffect(() => {
    fetchMerchant();
  }, []);

  return (
    <Box flexDirection="column">
      <CatalogBar/>
      <ProductsBlock />
      <CartButton />

      {visibleModalName === MODAL.PRODUCT_DETAILS ? (
        <Modal>
          <ProductDetails />
        </Modal>
      ) : null}
    </Box>
  );
};
