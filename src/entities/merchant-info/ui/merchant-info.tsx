import { useMerchantInfo } from '../model/merchant-info';
import { Chip, Stack, Typography } from '@/shared/ui';
import Clock from './icon/clock.svg?react';
import type { FC } from 'react';

export const MerchantInfo: FC = () => {
  const { data } = useMerchantInfo();

  return (
    <Stack direction="horizontal" justify="between" align='center' spacing="lg" className="m-3.5">
      <Stack>
        <Stack direction="horizontal" align='center' spacing='xs'>
          <Stack className="w-9 h-9 rounded-full overflow-hidden">
            {/* TODO: Добавить компонент Avatar? */}
            <img
              src={data?.logoUrl}
              alt="logo"
              className="w-full h-full object-cove"
            />
          </Stack>
          <Typography.Headline5>{data?.name}</Typography.Headline5>
        </Stack>
        <Typography.Body1>{data?.address}</Typography.Body1>
      </Stack>
      <Chip label='~30 минут' icon={<Clock/>} />
    </Stack>
  );
};
