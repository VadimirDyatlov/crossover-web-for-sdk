import { useCartStore } from "@/entities/cart";
import { Button, Stack, Typography } from "@/shared/ui";
import { cn } from "@/shared/lib";
import type { FC } from "react";

export const PayButton: FC = () => {
  const { totalPrice } = useCartStore();

  return (
    <Stack 
     justify="center"
      className={cn(
        "fixed left-0 right-0 z-20 w-full pointer-events-none",
        "bottom-[50px] px-4 pb-[env(safe-area-inset-bottom,0px)]"                  
      )}
    >
      <Button 
        className={cn(
          "w-full h-[60px] rounded-[20px]",                                     
          "pointer-events-auto"         
        )}
      >
          {/* TODO: PriceInfo это сущность */}
        <Typography.Headline4>
          {`К оплате ${totalPrice.toLocaleString('ru-RU')} ₽`}
        </Typography.Headline4>
      </Button>
    </Stack>
  );
};
