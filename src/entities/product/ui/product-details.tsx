import { useProductDetailsStore } from '../model/product';
import { Skeleton, Stack, Typography } from '@/shared/ui';
import type { FC } from 'react';

export const ProductDetails: FC = () => {
  const { data, isLoading } = useProductDetailsStore();

  if (isLoading) {
    return (
      <Stack spacing='xs'>
        <Skeleton height="350px" width='350px' />
        <Skeleton height="50px" width='350px' />
        <Skeleton height="50px" width='350px' />
        <Skeleton height="50px" width='350px' />
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack className="relative w-full aspect-square rounded-t-2xl overflow-hidden bg-gray-100">
        <img
          src={data?.imageUrl}
          alt={data?.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Stack>
      <Stack spacing="md" className="pt-8 pr-4 pb-4 pl-4">
        <Typography.Headline3>{data?.name}</Typography.Headline3>
        <Typography.Body1>{data?.description}</Typography.Body1>
        <Typography.Body1>{data?.specifications}</Typography.Body1>
      </Stack>
    </Stack>
  );
};
