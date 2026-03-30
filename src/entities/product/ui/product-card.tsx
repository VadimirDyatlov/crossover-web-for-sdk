import { useProductDetailsStore } from '../model/product';
import { useModal } from '@/shared/model';
import { Stack, Typography } from '@/shared/ui';
import { MODAL } from '@/shared/lib';
import type { FC, ReactNode } from 'react';
import type { types } from '@/shared/api';

interface ProductCardProps {
  children: ReactNode;
  product: types.Product;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { children, product } = props;

  const { fetchProductDetails } = useProductDetailsStore();
  const { showModal } = useModal();

  const handleClick = () => {
    fetchProductDetails(product.id);
    showModal(MODAL.PRODUCT_DETAILS);
  };

  return (
    <Stack className="z-10 relative" onClick={handleClick}>
      <Stack className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img
          src="/coffee.png"
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          ref={(img) => {
            if (!img) return;
            const original = new Image();
            original.onload = () => (img.src = product.imageUrl);
            original.src = product.imageUrl;
          }}
        />
      </Stack>
      {children}
      <Stack className="p-[8px]">
        <Typography.Headline4>{`${product.price} ₽`}</Typography.Headline4>
        <Typography.Body2Small>{product.name}</Typography.Body2Small>
      </Stack>
    </Stack>
  );
};
