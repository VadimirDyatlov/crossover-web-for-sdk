import type { FC } from "react";
import { Skeleton, Stack } from "@/shared/ui";

export const OrderDetailsSkeleton: FC = () => {
  return (
    <Stack direction="column" className="h-full bg-white overflow-hidden">
      <Stack spacing="xl" className="mt-4">
        <Stack align="center" spacing="sm">
          <Skeleton width="72px" height="72px" radius="50%" /> 
          <Skeleton width="180px" height="24px" radius="6px" />
        </Stack>

        <Stack align="center" className="py-4">
          <Skeleton width="200px" height="56px" radius="8px" />
        </Stack>

        <Stack
          align="center"
          className="mx-[48px] gap-2 p-[11px] rounded-[20px] bg-[#f6f6f8]"
        >
          <Skeleton width="110px" height="12px" radius="4px" />
          <Skeleton width="80px" height="24px" radius="4px" />
        </Stack>

        <Stack className="mt-2">
          {[1, 2, 3].map((i) => (
            <Stack key={i} direction="row" align="center" spacing="md" className="p-[12px_20px]">
              <Skeleton width="64px" height="64px" radius="16px" className="shrink-0" />
              <Stack className="w-full gap-2">
                <Stack className="gap-1">
                  <Skeleton width="70%" height="14px" radius="4px" />
                  <Skeleton width="30%" height="12px" radius="4px" />
                </Stack>
                <Stack direction="row" justify="between">
                  <Skeleton width="100px" height="12px" radius="4px" />
                  <Skeleton width="60px" height="16px" radius="4px" />
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Stack
          spacing="md"
          className="p-4 m-4 mb-20 rounded-[16px] bg-[#f6f6f8]"
        >
          <Stack direction="row" justify="between">
            <Skeleton width="100px" height="12px" radius="4px" />
            <Skeleton width="120px" height="12px" radius="4px" />
          </Stack>
          <Stack direction="row" justify="between">
            <Skeleton width="100px" height="12px" radius="4px" />
            <Skeleton width="60px" height="12px" radius="4px" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
