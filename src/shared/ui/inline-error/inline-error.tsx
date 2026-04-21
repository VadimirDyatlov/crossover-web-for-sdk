import { Button, Typography } from '..';
import { Stack } from '../stack/stack';
import ArrowClockwise from './icon/arrow_clockwise.svg?react';
import type { FC } from 'react';

interface InlineErrorProps {
  title?: string;
  description?: string;
  onRetry: () => void;
}

export const InlineError: FC<InlineErrorProps> = (props) => {
  const {
    title = 'Не получилось загрузить',
    // TODO: Убрать = "..."
    description = 'Но вы можете посмотреть другие категории',
    onRetry,
  } = props;

  return (
    <Stack align="center" justify="center" spacing="md" className="p-4 pt-8">
      <Stack align="center" spacing="sm">
        <Typography.Headline4 className="text-[24px] ">{title}</Typography.Headline4>
        <Stack className="px-[21px] text-center">
          {description && <Typography.Body1>{description}</Typography.Body1>}
        </Stack>
      </Stack>
      <Button variant="primary" className="rounded-[32px] px-4" onClick={onRetry}>
        <ArrowClockwise /> Обновить
      </Button>
    </Stack>
  );
};
