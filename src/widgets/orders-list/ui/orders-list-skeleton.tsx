import type { FC } from "react";
import { Skeleton, Stack } from "@/shared/ui";

export const OrdersListSkeleton: FC = () => {
  return [1, 2, 3, 4].map((index) => (
    <Stack
      key={index}
      className="h-[186px] w-full gap-5 rounded-[24px] bg-[#f6f6f8] p-4 shrink-0"
    >
      <Stack direction="row" justify="between">
        <Skeleton width="120px" height="12px" radius="4px" />
        <Skeleton width="60px" height="12px" radius="4px" />
      </Stack>

      <Stack spacing="md">
        <Stack direction="row" justify="between">
          <Stack direction="row" className="gap-3">
            <Skeleton width="36px" height="36px" radius="50%" />
            <Stack className="gap-2">
              <Skeleton width="140px" height="16px" radius="4px" />
              <Skeleton width="100px" height="12px" radius="4px" />
            </Stack>
          </Stack>
          <Skeleton width="60px" height="16px" radius="4px" />
        </Stack>

        <Stack align="center" className="gap-2 p-2 rounded-[16px] bg-white">
          <Skeleton width="110px" height="12px" radius="4px" />
          <Skeleton width="80px" height="20px" radius="4px" />
        </Stack>
      </Stack>
    </Stack>
  ));
};
