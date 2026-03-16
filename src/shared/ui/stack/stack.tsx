import { cn } from '@/shared/lib';
import type { FC, ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
  wrap?: boolean;
  onClick?: VoidFunction;
}

export const Stack: FC<StackProps> = (props) => {
  const {
    children,
    direction = 'vertical',
    spacing = 'none',
    align = 'stretch',
    justify = 'start',
    className,
    wrap = false,
    onClick,
  } = props;

  const directionClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  };

  const spacingClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  return (
    <div
      className={cn(
        'flex',
        directionClasses[direction],
        spacingClasses[spacing],
        alignClasses[align],
        justifyClasses[justify],
        wrap && 'flex-wrap',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
