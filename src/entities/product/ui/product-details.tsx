import { SmartImage, Stack, Typography } from '@/shared/ui';
import { useProductStore } from '../model/product';
import type { FC, ReactNode } from 'react';

interface ProductDetailsProps {
  children: ReactNode;
}

export const ProductDetails: FC<ProductDetailsProps> = (props) => {
  const { children } = props;
  const { data } = useProductStore((state) => state.productDetails);

  return (
    <Stack> 
      <SmartImage
        src={data?.imageUrl}
        alt={data?.name}
        className="relative w-full aspect-square rounded-t-2xl overflow-hidden bg-gray-100"
        imgClassName="object-cover"
      />
      <Stack spacing="md" className="pt-8 pr-4 pb-4 pl-4">
        <Typography.Headline3>{data?.name}</Typography.Headline3>
        <Typography.Body1>{data?.description}</Typography.Body1>
        <Typography.Body1>{data?.specifications}</Typography.Body1>
      </Stack>
      {children}
      {/* TODO: Добавить фичу добавление товара в козину */}
    </Stack>
  );
};
