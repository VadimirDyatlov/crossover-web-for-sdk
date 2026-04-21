import { NavigateBackButton } from "@/features/navigate-back";
import { useMerchantStore } from "@/entities/merchant";
import { SmartImage, Stack, Typography } from "@/shared/ui";
import type { FC } from "react";

export const CartHeader: FC = () => {
  const merchantInfo = useMerchantStore((state) => state.data);
  
  return (
    <Stack className="pt-[env(safe-area-inset-top)]">
      <Stack
        direction="row"
        align="center"
        justify="between"
        className="h-[44px] pl-2 pr-4"
      >
        <NavigateBackButton />
        <Stack align="center">
          <Typography.Headline3>Заказ</Typography.Headline3>
          <Typography.Body1>{merchantInfo?.address}</Typography.Body1>
        </Stack>
        <SmartImage
          src={merchantInfo?.logoUrl}
          alt="logo"
          className="w-9 h-9 rounded-full overflow-hidden"
          imgClassName="w-full h-full object-cover"
        />
      </Stack>
    </Stack>
  );
};
