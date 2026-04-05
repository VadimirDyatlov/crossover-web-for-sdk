import { BackButton, Stack, Typography } from "@/shared/ui";
import type { FC } from "react";

export const OrdersHeader: FC = () => {
  return (
    <Stack className="pt-[env(safe-area-inset-top)]">
      <Stack
        direction="horizontal"
        align="center"
        justify="center"
        className="h-[44px] w-full relative"
      >
        <BackButton className="absolute left-1" />
        <Typography.Headline3>Мои заказы</Typography.Headline3>
      </Stack>
    </Stack>
  );
};
