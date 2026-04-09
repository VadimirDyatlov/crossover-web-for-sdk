import { Box, Stack, Typography, SmartImage } from '@/shared/ui';
import type { FC, ReactNode } from 'react';
import type { types } from '@/shared/api';

interface ProductCardProps {
  children: ReactNode;
  product: types.Product;
  onClick: () => void;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { children, product, onClick } = props;

  return (
    <Stack
      className="shrink-0"
      onClick={onClick}
    >
      <Box className="relative">
        <SmartImage
          src={product.imageUrl}
          alt={product.name}
          className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100"
          imgClassName="w-full h-full object-cover"
        />
        {children}
      </Box>
      <Stack className="p-[8px]">
        <Typography.Headline4>{`${product.price.toLocaleString('ru-RU')} ₽`}</Typography.Headline4>
        <Typography.Body2Small>{product.name}</Typography.Body2Small>
      </Stack>
    </Stack>
  );
};
