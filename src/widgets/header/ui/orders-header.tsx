import { BackButton, Stack, Typography } from "@/shared/ui";
import type { FC } from "react";

export const OrdersHeader: FC = () => {
  return (
    <Stack direction='horizontal' justify='center' align='center' className="h-[44px] pt-sat">
      <BackButton className="absolute left-1"  />
      <Typography.Headline3>Мои заказы</Typography.Headline3>
    </Stack>
  );
};
