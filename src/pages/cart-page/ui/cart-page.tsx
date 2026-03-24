import { useMerchantInfo, useMerchantLazy } from '@/entities/merchant-info';
import { BackButton, Box, Stack, Typography } from '@/shared/ui';
import type { FC } from 'react';

export const CartPage: FC = () => {
  useMerchantLazy();
  const merchantInfo = useMerchantInfo((state) => state.data);

  return (
    <Box flexDirection="column">
      {/* header cart */}
      <Stack direction='horizontal' justify='between' align='center' className="ml-2 mr-4">
        <BackButton />
        <Stack align='center'>
          <Typography.Headline3>Заказ</Typography.Headline3>
          <Typography.Body1>{merchantInfo?.address}</Typography.Body1>
        </Stack>
        <Stack className="w-9 h-9 rounded-full overflow-hidden">
          <img src={merchantInfo?.logoUrl} alt="logo" className="w-full h-full object-cove" />
        </Stack>
      </Stack>
      <Stack className='p-4'>
        <Typography.Body1>Страница находится в разработке</Typography.Body1>
      </Stack>
    </Box>
  );
};
