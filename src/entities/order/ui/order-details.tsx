import type { FC, ReactNode } from 'react';
import { SmartImage, Stack, Typography } from '@/shared/ui';
import { useOrderStore } from '../model/order';

interface OrderDetailsProps {
  children?: ReactNode;
}

// TODO: Доработать Typography?
export const OrderDetails: FC<OrderDetailsProps> = (props) => {
  const { children } = props;
  // TODO: Убрать selectedOrder, все данные есть в OrderDetailResponse
  const { selectedOrder } = useOrderStore((state) => state.orderDetails);

  return (
    <Stack className="mt-4">
      <Stack spacing="xl">
        <Stack align="center" spacing="sm">
          <SmartImage
            src={selectedOrder?.merchantInfo.logoUrl}
            alt={selectedOrder?.merchantInfo.name}
            className="w-18 h-18 rounded-full border border-[#E5E7EB]"
            imgClassName="w-full h-full object-cover"
          />
          <Typography variant="headline1">
            {selectedOrder?.merchantInfo.name}
          </Typography>
        </Stack>
        <Stack align="center">
          <Typography variant="headline4">
            {`${selectedOrder?.totalAmount.toLocaleString('ru-RU')} ₽`}
          </Typography>
        </Stack>
        <Stack
          align="center"
          spacing="xs"
          className="p-[11px] m-[0_48px] rounded-[20px] bg-[rgb(246,246,248)]"
        >
          <Typography variant="body1Small">Код подтверждения</Typography>
          <Typography variant="headline1">
            {selectedOrder?.verificationCode}
          </Typography>
        </Stack>
        {children}
      </Stack>
      <Stack
        spacing="md"
        className="p-4 m-4 mb-20 rounded-[16px] bg-[rgb(246,246,248)]"
      >
        <Stack direction="row" justify="between">
          <Typography variant="body1Small">Дата и время</Typography>
          <Typography variant="body1Small">{selectedOrder?.orderTime}</Typography>
        </Stack>
        <Stack direction="row" justify="between">
          <Typography variant="body1Small">Готов к выдаче</Typography>
          <Typography variant="body1Small">11:00</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
