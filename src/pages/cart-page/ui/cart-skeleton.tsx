import type { FC } from 'react';
import { cn } from '@/shared/lib';
import { Skeleton, Stack } from '@/shared/ui';

export const CartSkeleton: FC = () => {
  return (
    <Stack direction="column" className="h-dvh w-full bg-white overflow-hidden">
      <Stack className="pt-[env(safe-area-inset-top)]">
        <Stack
          direction="row"
          align="center"
          justify="between"
          className="h-[44px] pl-2 pr-4"
        >
          <div className="w-9" />
          <Stack align="center" className="gap-1">
            <Skeleton width="60px" height="16px" radius="4px" />
            <Skeleton width="120px" height="12px" radius="4px" />
          </Stack>
          <Skeleton width="36px" height="36px" radius="50%" />
        </Stack>
      </Stack>

      <Stack className="flex-1 overflow-hidden">
        <Stack className="px-4 mt-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <Stack
              key={index}
              direction="row"
              align="center"
              className={cn(
                'gap-3 bg-[#f6f6f8] px-4 py-[11px] shrink-0',
                'first:pt-4 first:rounded-t-[24px]',
                'last:pb-4 last:rounded-b-[24px]',
              )}
            >
              <Skeleton width="80px" height="80px" radius="16px" />
              <Stack className="flex-1 gap-4 mt-1">
                <Stack className="gap-1">
                  <Skeleton width="70%" height="14px" radius="4px" />
                  <Skeleton width="40%" height="12px" radius="4px" />
                </Stack>
                <Stack direction="row" justify="between" align="center">
                  <Skeleton width="60px" height="16px" radius="4px" />
                  <Skeleton width="90px" height="32px" radius="25px" />
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Stack className="m-[24px] p-[18px] rounded-[4px_16px_16px_16px] border border-gray-300 bg-white">
          <Skeleton width="100%" height="20px" radius="4px" />
        </Stack>
      </Stack>

      <Stack className="fixed left-0 right-0 px-4 bottom-[calc(50px+env(safe-area-inset-bottom,0px))]">
        <Skeleton width="100%" height="60px" radius="20px" />
      </Stack>
    </Stack>
  );
};
