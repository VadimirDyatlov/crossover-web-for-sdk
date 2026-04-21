import { Button, Typography, Stack } from '..';
import type { FC } from 'react';

interface FullPageErrorProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  isShowIcon?: boolean;
  onBack?: () => void;
}

export const FullPageError: FC<FullPageErrorProps> = (props) => {
  const {
    title = 'Не удалось загрузить данные',
    // TODO: Убрать = ""
    description = 'Возникла временная ошибка. Пожалуйста, попробуйте позже',
    onBack,
    actionLabel = 'Закрыть',
    isShowIcon = true,
  } = props;

  return (
    <Stack direction="column" className="h-[100svh] w-full bg-white">
      <Stack
        spacing="xl"
        align="center"
        justify="center"
        className="flex-1 text-center p-6"
      >
        {isShowIcon && (
          <div className="flex items-center justify-center w-[92px] h-[92px]">
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="10"
                x2="56"
                y2="56"
                stroke="rgb(234, 74, 112)"
                strokeWidth="20.52"
                strokeLinecap="round"
              />
              <line
                x1="56"
                y1="10"
                x2="10"
                y2="56"
                stroke="rgb(234, 74, 112)"
                strokeWidth="20.52"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
        <Stack align="center" className="gap-[12px]">
          <Typography.Headline4 className="text-[24px] ">
            {title}
          </Typography.Headline4>
          {description && <Typography.Body1>{description}</Typography.Body1>}
        </Stack>
      </Stack>
      {onBack && (
        <Stack className="p-4 pb-8">
          <Button
            variant="primary"
            className="w-full h-[60px] rounded-[20px]"
            onClick={onBack}
          >
            {actionLabel}
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
