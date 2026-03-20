import { useEffect } from 'react';
import { useCategory } from '@/entities/category';
import { useProductsBlock } from '../model/products-block';
import { ProductCard } from '@/entities/product-card';
import { Stack } from '@/shared/ui';
import type { FC } from 'react';

export const ProductsBlock: FC = () => {
  const { fetchProductList, data } = useProductsBlock();
  const { selectedCategory } = useCategory();

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
