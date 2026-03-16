import { useModal } from '@/shared/model';
import { Stack } from '@/shared/ui';
import { XIcon } from 'lucide-react'
import type { FC } from 'react';

export const Modal: FC<any> = (props) => {
  const { children } = props;
  const { closeModal } = useModal();

  return (
    <Stack className="fixed top-0 left-0 z-18 flex flex-col items-center w-full h-full overflow-x-hidden overflow-y-auto bg-white">
      <div className="flex items-center justify-end w-full">
        <button onClick={closeModal}>
          <XIcon />
        </button>
      </div>
      <Stack>{children}</Stack>
    </Stack>
  );
};
