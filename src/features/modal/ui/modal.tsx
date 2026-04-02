import { useModal } from '@/shared/model';
import { Stack } from '@/shared/ui';
import { XIcon } from 'lucide-react'
import styles from './modal.module.css';
import type { FC } from 'react';
import { cn } from '@/shared/lib';

export const Modal: FC<any> = (props) => {
  const { children } = props;
  const { closeModal } = useModal();

  return (
    <Stack
      className={cn(
        'fixed left-0 z-50 flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto bg-white',
        styles.modal,
      )}
    >
      <div className="flex items-center justify-end w-full">
        <button onClick={closeModal}>
          <XIcon />
        </button>
      </div>
      <Stack>{children}</Stack>
    </Stack>
  );
};
