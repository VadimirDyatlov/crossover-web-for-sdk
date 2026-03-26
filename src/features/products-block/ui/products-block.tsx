import {
  useProductsBlock,
  useProductsByCategory,
  useProductsScroll,
} from '../model/products-block';
import { ProductCard } from '@/entities/product-card';
import type { FC } from 'react';

export const ProductsBlock: FC = () => {
  const { data } = useProductsBlock();
  const scrollRef = useProductsScroll();
  useProductsByCategory();

  return (
    <div
      ref={scrollRef}
      className={`
        ml-4 mr-4 grid grid-cols-2 gap-1 
        flex-wrap z-10 overflow-y-auto 
        [&::-webkit-scrollbar]:hidden
      `}
    >
      {data.map((product) => {
        return <ProductCard key={product.id} card={product} />;
      })}
    </div>
  );
};

