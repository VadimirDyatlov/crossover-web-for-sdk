import type { types } from '@/shared/api';
import {
  useProductListStore,
  useProductsByCategory,
  useProductsScroll,
} from '../model/product-list';
import type { FC, ReactNode } from 'react';

interface ProductListProps {
  renderCard: (product: types.Product) => ReactNode
}

// TODO: Это не фича, это виджет.
export const ProductList: FC<ProductListProps> = (props) => {
  const { renderCard } = props;
  const { data } = useProductListStore();
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
      {data.map((product) => renderCard(product))}
    </div>
  );
};
