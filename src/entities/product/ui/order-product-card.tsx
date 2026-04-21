import { SmartImage, Stack, Typography } from '@/shared/ui';
import { parseProductName } from '../lib/parse-product-name';
import type { types } from '@/shared/api';
import type { FC } from 'react';

interface OrderProductCardProps {
  product: types.Product;
  quantity: number;
}

export const OrderProductCard: FC<OrderProductCardProps> = (props) => {
  const { product, quantity } = props;
  const { name, weight } = parseProductName(product.name);

  return (
    <Stack
      key={product.id}
      direction="row"
      align="center"
      spacing="md"
      className="p-[12px_20px]"
    >
      <SmartImage
        src={product.imageUrl}
        alt={product.name}
        className="h-16 w-16 shrink-0 aspect-square rounded-[16px] overflow-hidden bg-gray-100"
        imgClassName="object-cover w-full h-full"
      />
      <Stack className="w-full">
        <Stack className="mt-[4px]">
          <Typography.Body2Small>{name}</Typography.Body2Small>
          <Typography.Body2Small>{weight}</Typography.Body2Small>
        </Stack>
        <Stack direction="row" align="center" justify="between">
          <Typography.Body2Small>{`${quantity}шт. × ${product.price}`}</Typography.Body2Small>

          <Typography.Headline4>{`${(product.price * quantity).toLocaleString('ru-RU')} ₽`}</Typography.Headline4>
        </Stack>
      </Stack>
    </Stack>
  );
};
