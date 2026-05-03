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
      <Stack className="min-w-0 flex-1"> 
        <Stack direction="row" align="center" spacing="xs">
          <SmartImage
            src={data?.logoUrl}
            alt="logo"
            className="size-9 rounded-full bg-gray-100 shrink-0"
            imgClassName="w-full h-full object-cover"
          />
          <Typography.Headline5 className="truncate leading-none">{data?.name}</Typography.Headline5>
        </Stack>
        {/* TODO: Переделать под новый дизайн и убрать slice */}
        <Typography.Body1>{data?.address?.split(', ').slice(1).join()}</Typography.Body1>
      </Stack>
      <Chip label={`~${data?.timeToPrepare} минут`} icon={<Clock />} />
    </Stack>
  );
};
