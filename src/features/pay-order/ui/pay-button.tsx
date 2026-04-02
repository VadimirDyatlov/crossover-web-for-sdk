import { useCartStore } from "@/entities/cart";
import { Box, Button, Typography } from "@/shared/ui";
import styles from './pay-button.module.css';
import type { FC } from "react";

export const PayButton: FC = () => {
  const { totalPrice } = useCartStore();

  return (
    <Box className={styles.payButtonContainer}>
      <Button className={styles.payButton}>
        {/* TODO: PriceInfo это сущность */}
        <Typography.Headline4>{`К оплате ${totalPrice} ₽`}</Typography.Headline4>
      </Button>
    </Box>
  );
};
