import { Stack, Typography } from '@/shared/ui';
import { CloseIcon } from '@/shared/assets/icons';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <Stack direction="horizontal" justify="between" className="m-3">
      <button
        className="flex items-center justify-center p-0 cursor-pointer bg-none border-none"
        onClick={() => console.log('выход')}
      >
        <img src={CloseIcon} alt="close-icon" />
      </button>
      {/* TODO: Новая страница или модалка? */}
      <button
        className="cursor-pointer bg-none border-none"
        onClick={() => console.log('заказы')}
      >
        <Typography.Body1>Мои заказы</Typography.Body1>
      </button>
    </Stack>
  );
};
