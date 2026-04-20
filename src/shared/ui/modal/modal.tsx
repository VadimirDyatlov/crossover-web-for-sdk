import { Stack } from '@/shared/ui';
import { cn } from '@/shared/lib';
import type { FC, ReactNode } from 'react';
import { Drawer } from 'vaul';

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
  onClose: () => void;
}

// TODO: Закрывать свайпом?
// TODO: Анимация
// TODO: В работе
export const Modal: FC<ModalProps> = (props) => {
  const { children, isOpen, className, onClose } = props;

  return (
    // <Stack
    //   className={cn(
    //     // 'fixed left-0 z-50 w-full h-dvh',
    //     'fixed left-0 z-50 w-full h-svh',
    //     'overflow-x-hidden overflow-y-auto bg-white',
    //     'pt-[env(safe-area-inset-top)]',
    //     className,
    //   )}
    // >
    //   <Stack align='end' className="w-full">
    //     <button onClick={onClose}>
    //       <CloseIcon />
    //     </button>
    //   </Stack>
    //   <Stack className="w-full">{children}</Stack>
    // </Stack>
    <Drawer.Root
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
      shouldScaleBackground={false}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />

        <Drawer.Content
          className={cn(
            'fixed bottom-0 left-0 right-0 z-50 flex flex-col bg-white outline-none',
            'h-[94svh] rounded-t-[24px]', // Высота и скругление сверху
            className,
          )}
        >
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#E5E5EA] my-4" />

          {/* <div className="flex justify-end px-4">
            <button onClick={onClose} className="p-2 active:opacity-50">
              <CloseIcon />
            </button>
          </div> */}

          {/* Контент скроллится внутри, если его много */}
          {/* <div className="flex-1 overflow-y-auto px-4 pb-[env(safe-area-inset-bottom)]">
            {children}
          </div> */}
          <Stack className="w-full">{children}</Stack>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
