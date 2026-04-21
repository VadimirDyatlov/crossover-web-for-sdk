import { SmartImage, Stack, Typography } from "@/shared/ui";
import { useOrderStore } from "../model/order";
import type { FC, ReactNode } from "react";

interface OrderDetailsProps {
  children?: ReactNode;
}

// TODO: Добавить кнопку повторить заказ?
// TODO: Доработать Typography?
export const OrderDetails: FC<OrderDetailsProps> = (props) => {
  const { children } = props;
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
          <Typography.Headline4 className="text-[20px]">
            {selectedOrder?.merchantInfo.name}
          </Typography.Headline4>
        </Stack>
        <Stack align="center">
          <Typography.Headline4 className="text-[48px]">
            {`${selectedOrder?.totalAmount.toLocaleString('ru-RU')} ₽`}
          </Typography.Headline4>
        </Stack>
        <Stack
          align="center"
          spacing="xs"
          className="p-[11px] m-[0_48px] rounded-[20px] bg-[rgb(246,246,248)]"
        >
          <Typography.Body2Small>Код подтверждения</Typography.Body2Small>
          <Typography.Headline3>
            {selectedOrder?.verificationCode}
          </Typography.Headline3>
        </Stack>
        {children}
      </Stack>
      <Stack
        spacing="md"
        className="p-4 m-4 mb-20 rounded-[16px] bg-[rgb(246,246,248)]"
      >
        <Stack direction="row" justify="between">
          <Typography.Body2Small>Дата и время</Typography.Body2Small>
          <Typography.Body2Small>{selectedOrder?.orderTime}</Typography.Body2Small>
        </Stack>
        <Stack direction="row" justify="between">
          <Typography.Body2Small>Готов к выдаче</Typography.Body2Small>
          <Typography.Body2Small>11:00</Typography.Body2Small>
        </Stack>
      </Stack>
    </Stack>
  );
};
