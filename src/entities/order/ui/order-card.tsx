import type { FC } from 'react';
import type { types } from '@/shared/api';
import { SmartImage, Stack, Typography } from '@/shared/ui';
import { formatOrderTime } from '../lib/format-order-time';

interface OrderCardProps {
  order: types.Order;
  onClick: () => void;
}

// TODO: Подкрашивать status
// TODO: Обработать переполнение текста
export const OrderCard: FC<OrderCardProps> = ({ order, onClick }) => {
  const { orderId, orderTime, merchantInfo, verificationCode, status, totalAmount } =
    order;

  return (
    <Stack
      className="gap-5 rounded-[24px] bg-[#f6f6f8] p-4 shrink-0"
      onClick={onClick}
    >
      <Stack direction="row" justify="between">
        <Stack direction="row" spacing="xs">
          <Typography variant="body1Secondary">
            {formatOrderTime(orderTime)}
          </Typography>
          <Typography variant="body1Secondary">{`• ${status}`}</Typography>
        </Stack>
        {/* TODO: Переделать под новый дизайн и убрать slice */}
        <Typography variant="body1Secondary">{orderId.slice(10)}</Typography>
      </Stack>
      <Stack spacing="md">
        <Stack direction="row" justify="between">
          <Stack direction="row" className="gap-3">
            <SmartImage
              src={merchantInfo.logoUrl}
              alt={merchantInfo.name}
              className="h-9 w-9 aspect-square rounded-full overflow-hidden bg-gray-100"
              imgClassName="object-cover w-full h-full"
            />
            <Stack className="gap-0.5">
              <Typography variant="headline2">{merchantInfo.name}</Typography>
              <Typography variant="body1Small">{merchantInfo.address}</Typography>
            </Stack>
          </Stack>
          <Typography variant="headline2" className="whitespace-nowrap">
            {`${totalAmount.toLocaleString('ru-RU')} ₽`}
          </Typography>
        </Stack>
        <Stack align="center" className="gap-1 p-2 rounded-[16px] bg-white">
          <Typography variant="body1Small">Код подтверждения</Typography>
          <Typography variant="headline1">{verificationCode}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
