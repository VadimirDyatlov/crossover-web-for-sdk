import { Stack } from '@/shared/ui';
import { CloseIcon } from '@/shared/assets/icons';
import { cn } from '@/shared/lib';
import type { FC, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  className?: string;
  onClose: () => void;
}

// TODO: Закрывать свайпом?
// TODO: Анимация
export const Modal: FC<ModalProps> = (props) => {
  const { children, className, onClose } = props;

  return (
    <Stack
      className={cn(
        // 'fixed left-0 z-50 w-full h-dvh',
        'fixed left-0 z-50 w-full h-svh',
        'overflow-x-hidden overflow-y-auto bg-white',
        'pt-[env(safe-area-inset-top)]',
        className,
      )}
    >
      <Stack align='end' className="w-full">
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </Stack>
      <Stack className="w-full">{children}</Stack>
    </Stack>
  );
};
