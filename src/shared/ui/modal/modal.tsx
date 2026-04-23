import type { FC, ReactNode } from 'react';
import { Drawer } from 'vaul';
import { cn } from '@/shared/lib';
import { Stack } from '@/shared/ui';

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
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black" />

        <Drawer.Content
          className={cn(
            'fixed bottom-0 left-0 right-0 z-50 flex flex-col bg-white outline-none',
            'h-[94svh] rounded-t-[24px]', // Высота и скругление сверху
            className,
          )}
        >
          <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-10 h-1 flex-shrink-0 rounded-full bg-[#E5E5EA]" />

          <Drawer.Title className="sr-only">Информация о товаре</Drawer.Title>
          {/* overscroll-contain  */}
          <Stack className="flex-1 overflow-y-auto overscroll-contain outline-none">
            {children}
          </Stack>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
