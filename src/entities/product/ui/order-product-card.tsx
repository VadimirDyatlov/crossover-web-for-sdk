import type { FC } from 'react';
import type { types } from '@/shared/api';
import { SmartImage, Stack, Typography } from '@/shared/ui';
import { parseProductName } from '../lib/parse-product-name';

interface OrderProductCardProps extends types.OrderDetailProduct {}

export const OrderProductCard: FC<OrderProductCardProps> = (props) => {
  const { costPrice, imageUrl, name, quantity } = props;
  const { name: productName, weight } = parseProductName(name);

  return (
    <Stack direction="row" align="center" spacing="md" className="p-[12px_20px]">
      <SmartImage
        src={imageUrl}
        alt={name}
        className="h-16 w-16 shrink-0 aspect-square rounded-[16px] overflow-hidden bg-gray-100"
        imgClassName="object-cover w-full h-full"
      />
      <Stack className="w-full">
        <Stack className="mt-[4px]">
          <Typography.Body2Small>{productName}</Typography.Body2Small>
          <Typography.Body2Small>{weight}</Typography.Body2Small>
        </Stack>
        <Stack direction="row" align="center" justify="between">
          <Typography.Body2Small>{`${quantity}шт. × ${costPrice}`}</Typography.Body2Small>

          <Typography.Headline4>{`${(costPrice * quantity).toLocaleString('ru-RU')} ₽`}</Typography.Headline4>
        </Stack>
      </Stack>
    </Stack>
  );
};
