import type { FC } from 'react';
import { useCartStore } from '@/entities/cart';
import { cn, trackAction, USER_ACTION } from '@/shared/lib';
import { Button, Stack, Typography } from '@/shared/ui';

export const PayButton: FC = () => {
  const { totalPrice, totalQuantity } = useCartStore();

  // Нажатие «Оплатить» — ключевое действие, уводим его в нативку:
  // оплата дальше пойдёт нативным флоу (платёжный SDK)
  const handlePay = () => {
    trackAction(USER_ACTION.CART_PAY, { totalPrice, totalQuantity });
  };

  return (
    <Stack
      justify="center"
      className={cn(
        'fixed left-0 right-0 z-20 w-full pointer-events-none',
        // "bottom-[50px] px-4 pb-[env(safe-area-inset-bottom,0px)]",
        'px-4 bottom-[calc(50px+env(safe-area-inset-bottom,0px))]',
      )}
    >
      <Button
        onClick={handlePay}
        className={cn('w-full h-[60px] rounded-[20px]', 'pointer-events-auto')}
      >
        {/* TODO: PriceInfo это сущность */}
        <Typography variant="headline2">
          {`К оплате ${totalPrice.toLocaleString('ru-RU')} ₽`}
        </Typography>
      </Button>
    </Stack>
  );
};
