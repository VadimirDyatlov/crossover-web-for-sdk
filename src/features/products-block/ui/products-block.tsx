import { useProductsBlock } from '../model/products-block';
import { useEffect } from 'react';
import { ProductCard } from '@/entities/product-card';
import { Stack } from '@/shared/ui';
import type { types } from '@/shared/api';
import type { FC } from 'react';

interface ProductsBlockProps {
  selectedCategory: types.Category | null;
}

export const ProductsBlock: FC<ProductsBlockProps> = (props) => {
  const { selectedCategory } = props;

  const { data, fetchProductList } = useProductsBlock();

  useEffect(() => {
    if (!selectedCategory) return;

    fetchProductList(selectedCategory.id);
  }, [selectedCategory]);

  return (
    <Stack
      spacing="sm"
      wrap={true}
      className="ml-2 mr-2 grid grid-cols-2 z-10 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {data.map((product) => {
        return <ProductCard key={product.id} card={product} />;
      })}
    </Stack>
  );
};
