import { SmartImage, Stack, Typography } from "@/shared/ui";
import type { types } from "@/shared/api";
import type { FC } from "react";

interface OrderProductCardProps {
  product: types.Product;
  quantity: number;
}

export const OrderProductCard: FC<OrderProductCardProps> = (props) => {
  const { product, quantity } = props;
  // TODO: Вынести в хелпер?
  const parts = product.name.split(' ');
  const weight = parts.pop(); 
  const name = parts.join(' '); 

  return (
    <Stack
      key={product.id}
      direction="horizontal"
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
        <Stack direction="horizontal" align="center" justify="between">
          <Typography.Body2Small>{`${quantity}шт. × ${product.price}`}</Typography.Body2Small>

          <Typography.Headline4>{`${product.price * quantity} ₽`}</Typography.Headline4>
        </Stack>
      </Stack>
    </Stack>
  );
};
