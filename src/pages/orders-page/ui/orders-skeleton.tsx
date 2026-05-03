import type { FC } from 'react';
import { Skeleton, Stack } from '@/shared/ui';
import { OrdersListSkeleton } from '@/widgets/orders-list';

export const OrdersSkeleton: FC = () => {
  return (
    <Stack direction="column" className="h-dvh w-full bg-white overflow-hidden">
      <Stack align="center" justify="center" className="h-[44px] shrink-0 border-b border-gray-100">
        <Skeleton width="124px" height="28px" radius="12px" />
      </Stack>
      <Stack spacing="sm" className="p-4 overflow-hidden">
       <OrdersListSkeleton />
      </Stack>
    </Stack>
  );
};
