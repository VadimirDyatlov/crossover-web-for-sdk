import { cn } from '@/shared/lib';
import type { FC, ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  flexDirection?: 'column' | 'row' | 'row-reverse';
  rowGap?: number;
  className?: string;
  onClick?: VoidFunction;
}

export const Box: FC<BoxProps> = (props) => {
  const { children, className, flexDirection, rowGap, onClick } = props;

  const flexDirectionClass =
    flexDirection === 'column'
      ? 'flex-col'
      : flexDirection === 'row-reverse'
        ? 'flex-row-reverse'
        : 'flex-row';

  return (
    <div
      style={{ rowGap }}
      className={cn('flex w-full max-w-full', flexDirectionClass, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
