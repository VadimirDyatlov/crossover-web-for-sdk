import type { FC } from 'react';
import { Chip, SmartImage, Stack, Typography } from '@/shared/ui';
import Clock from '../icon/clock.svg?react';
import { useMerchantStore } from '../model/merchant';

export const MerchantInfo: FC = () => {
  const { data } = useMerchantStore();

  return (
    <Stack
      direction="row"
      justify="between"
      align="center"
      spacing="lg"
      className="m-3.5"
    >
      <Stack>
        <Stack direction="row" align="center" spacing="xs">
          <SmartImage
            src={data?.logoUrl}
            alt="logo"
            className="size-9 rounded-full bg-gray-100"
            imgClassName="w-full h-full object-cover"
          />
          <Typography.Headline5>{data?.name}</Typography.Headline5>
        </Stack>
        <Typography.Body1>{data?.address}</Typography.Body1>
      </Stack>
      <Chip label="~30 минут" icon={<Clock />} />
    </Stack>
  );
};
