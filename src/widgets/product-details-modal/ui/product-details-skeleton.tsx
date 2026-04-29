import type { FC } from "react";
import { Skeleton, Stack } from "@/shared/ui";

export const ProductDetailsSkeleton: FC = () => {
  return (
    <Stack direction="column" className="relative h-full bg-white overflow-hidden">
      <Skeleton 
        width="100%" 
        height="auto"
        radius="16px 16px 0 0" 
        className="aspect-square shrink-0" 
      />

      <Stack spacing="md" className="pt-8 pr-4 pb-4 pl-4">
        <Skeleton width="70%" height="28px" radius="6px" />
        <Stack spacing="xs">
          <Skeleton width="100%" height="16px" radius="4px" />
          <Skeleton width="100%" height="16px" radius="4px" />
          <Skeleton width="40%" height="16px" radius="4px" />
        </Stack>
      </Stack>

      <Stack
        align="center"
        className="fixed left-0 right-0 z-50 px-4 bottom-[calc(34px+env(safe-area-inset-bottom,0px))]"
      >
        <Skeleton width="100%" height="56px" radius="16px" />
      </Stack>
    </Stack>
  );
};
