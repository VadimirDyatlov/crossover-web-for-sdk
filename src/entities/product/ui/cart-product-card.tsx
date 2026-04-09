import { SmartImage, Stack, Typography } from "@/shared/ui";
import { cn } from "@/shared/lib";
import type { types } from "@/shared/api";
import type { FC, ReactNode } from "react";

interface CartProductCardProps {
  product: types.Product;
  children: ReactNode;
}

export const CartProductCard: FC<CartProductCardProps> = (props) => {
  const { product, children } = props;
  // TODO: Вынести в хелпер?
  const parts = product.name.split(' ');
  const weight = parts.pop();
  const name = parts.join(' ');

  return (
    <Stack
      key={product.id}
      direction="row"
      align="center"
      spacing="md"
      className={cn(
        'shrink-0',
        'bg-[#f6f6f8] px-4 py-[11px]',
        'first:pt-4 first:rounded-t-[24px]',
        'last:pb-4 last:rounded-b-[24px]',
      )}
    >
      <SmartImage
        src={product.imageUrl}
        alt={product.name}
        className="w-20 h-20 rounded-[16px] overflow-hidden shrink-0"
        imgClassName="object-cover"
        placeholderClassName="bg-[#e9e9e9]"
      />
      <Stack className="relative w-full">
        <Stack className="mt-[4px]">
          <Typography.Body2Small>{name}</Typography.Body2Small>
          <Typography.Body2Small>{weight}</Typography.Body2Small>
        </Stack>
        <Stack direction="row" align="center" justify="between">
          <Typography.Headline4>{`${product.price.toLocaleString('ru-RU')} ₽`}</Typography.Headline4>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};
