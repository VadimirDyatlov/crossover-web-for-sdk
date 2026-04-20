import { cn } from '@/shared/lib';
import type { FC, ReactNode } from 'react';

interface Body1Props {
  className?: string;
  children: ReactNode;
}

export const Body1: FC<Body1Props> = (props) => {
  const { className, children } = props;
  
  return (
    <span
      className={cn(
        'font-SBSans text-[15px] font-medium leading-[20px] tracking-[-0.023em]',
        className,
      )}
    >
      {children}
    </span>
  );
};
