import { Skeleton, Stack } from '@/shared/ui';

export const CatalogSkeleton = () => {
  return (
    <Stack spacing="sm" className="h-[100dvh] w-full bg-white p-4 pt-[60px]">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton
          key={i}
          height="186px"
          width="358px"
          radius="24px"
          className="bg-[#f6f6f8]"
        />
      ))}
    </Stack>
  );
};
