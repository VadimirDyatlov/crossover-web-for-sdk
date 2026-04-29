import type { FC } from "react";
import { Skeleton, Stack } from "@/shared/ui";

export const ProductListSkeleton: FC = () => {
    return [1, 2, 3, 4, 5, 6].map((index) => (
        <Stack key={index} className="shrink-0">
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
      )
  );
};
