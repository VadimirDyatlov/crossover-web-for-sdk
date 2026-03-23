import { Box, Typography } from '@/shared/ui';
import type { FC } from 'react';

export const MyOrdersPage: FC = () => {
  return (
    <Box flexDirection="column" className="p-4">
      <Typography.Headline3>Мои заказы</Typography.Headline3>
      <Typography.Body1>Страница заказов в разработке</Typography.Body1>
    </Box>
  );
};
