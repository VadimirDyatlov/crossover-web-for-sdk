import type { FC } from "react";
import { cn } from "@/shared/lib";
import { Skeleton, Stack } from "@/shared/ui";

export const ProductListSkeleton: FC = () => {
  return (
    <Stack
      spacing="xs"
      className={cn(
        'grid grid-cols-2 p-4',
        'pb-[calc(120px+env(safe-area-inset-bottom,0px))]',
      )}
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Stack key={i} className="shrink-0">
          <Skeleton
            width="100%"
            height="auto"
            radius="16px"
            className="aspect-square"
          />
          <Stack className="p-[8px] gap-2 mb-[6px]">
            <Skeleton width="90%" height="12px" radius="4px" />
            <Skeleton width="60%" height="12px" radius="4px" />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
