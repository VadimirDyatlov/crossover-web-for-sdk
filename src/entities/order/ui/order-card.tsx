import { SmartImage, Stack, Typography } from "@/shared/ui";
import { formatOrderTime } from "../lib/format-order-time";
import type { FC } from "react";
import type { types } from "@/shared/api";

interface OrderCardProps {
  order: types.Order;
  onClick: () => void;
}

// TODO: Подкрашивать status
// TODO: Обработать переполнение текста 
export const OrderCard: FC<OrderCardProps> = (props) => {
  const { orderId, orderTime, merchantInfo, verificationCode, status, totalAmount } =
    props.order;

  return (
    <Stack
      className="gap-5 rounded-[24px] bg-[#f6f6f8] p-4 shrink-0"
      onClick={props.onClick}
    >
      <Stack direction="row" justify="between">
        <Stack direction="row" spacing="xs">
          <Typography.Body5Secondary>
            {formatOrderTime(orderTime)}
          </Typography.Body5Secondary>
          <Typography.Body5Secondary>{`• ${status}`}</Typography.Body5Secondary>
        </Stack>
        <Typography.Body5Secondary>{orderId}</Typography.Body5Secondary>
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
              <Typography.Headline4>{merchantInfo.name}</Typography.Headline4>
              <Typography.Body2Small>{merchantInfo.address}</Typography.Body2Small>
            </Stack>
          </Stack>
          <Typography.Headline4>{`${totalAmount.toLocaleString('ru-RU')} ₽`}</Typography.Headline4>
        </Stack>
        <Stack align="center" className="gap-1 p-2 rounded-[16px] bg-white">
          <Typography.Body2Small>Код подтверждения</Typography.Body2Small>
          <Typography.Headline3>{verificationCode}</Typography.Headline3>
        </Stack>
      </Stack>
    </Stack>
  );
};
