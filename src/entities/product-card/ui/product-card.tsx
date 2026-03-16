import { useProductDetails } from '@/entities/product-details';
import { useModal } from '@/shared/model';
import { Stack, Typography } from '@/shared/ui';
import { MODAL } from '@/shared/lib';
import type { FC } from 'react';
import type { types } from '@/shared/api';

interface ProductCardProps {
  card: types.Product;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { card } = props;

  const { fetchProductDetails } = useProductDetails();
  const { showModal } = useModal();

  const handleClick = () => {
    fetchProductDetails(card.id);
    showModal(MODAL.PRODUCT_DETAILS);
  };

  return (
    <Stack className="z-10" onClick={handleClick}>
      <Stack className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img
          src="/coffee.png"
          alt={card.name}
          className="w-full h-full object-cover"
          loading="lazy"
          ref={(img) => {
            if (!img) return;
            const original = new Image();
            original.onload = () => (img.src = card.imageUrl);
            original.src = card.imageUrl;
          }}
        />
      </Stack>
      <Stack className="p-[8px]">
        <Typography.Headline4>{card.price + ' ₽'}</Typography.Headline4>
        <Typography.Body2Small>{card.name}</Typography.Body2Small>
      </Stack>
    </Stack>
  );
};
