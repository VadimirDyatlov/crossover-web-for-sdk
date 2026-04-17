import { Button, Typography } from "..";
import { Stack } from "../stack/stack";
import type { FC } from "react";

interface InlineErrorProps {
  message?: string;
  onRetry: () => void;
}

export const InlineError: FC<InlineErrorProps> = (props) => {

  const { message = 'Ошибка загрузки', onRetry } = props;

  return (
    <Stack align="center" justify="center" className="p-6 gap-3 text-center">
      <Typography.Body2Small>{message}</Typography.Body2Small>
      <Button variant="outline" size="sm" onClick={onRetry}>
        Обновить
      </Button>
    </Stack>
  );
};
