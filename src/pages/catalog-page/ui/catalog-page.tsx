import { useEffect, useState } from 'react';
import { useCatalogPage } from '../model/catalog-page';
import { useModal } from '@/shared/model';
import { CatalogBar } from '@/widgets/catalog-bar';
import { ProductsBlock } from '@/features/products-block';
import { ProductDetails } from '@/entities/product-details';
import { Modal } from '@/features/modal';
import { Box } from '@/shared/ui';
import { MODAL } from '@/shared/lib/constants';
import type { FC } from 'react';
import type { types } from '@/shared/api';

export const CatalogPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<types.Category | null>(null);

  const { data, fetchMerchant } = useCatalogPage();
  const { visibleModalName } = useModal();

  useEffect(() => {
    fetchMerchant();
  }, []);

  useEffect(() => {
    if (!Array.isArray(data?.category)) return;

    setSelectedCategory(data?.category[0]);
  }, [data]);

  return (
    <Box flexDirection="column">
      <CatalogBar
        merchant={data}
        categories={data?.category || []}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsBlock selectedCategory={selectedCategory} />

      {visibleModalName === MODAL.PRODUCT_DETAILS ? (
        <Modal>
          <ProductDetails />
        </Modal>
      ) : null}
    </Box>
  );
};
