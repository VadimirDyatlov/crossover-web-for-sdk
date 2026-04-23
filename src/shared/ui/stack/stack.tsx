import { cn } from '@/shared/lib';
import { forwardRef, type ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
  wrap?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    children,
    direction = 'column',
    spacing = 'none',
    align = 'stretch',
    justify = 'start',
    className,
    wrap = false,
    onClick,
    style,
    ...rest
  } = props;

  const directionClasses = {
    row: 'flex-row',
    column: 'flex-col',
  };

  // gap во flex-контексте не работает на iOS < 14.5 (апрель 2021)
  // если нужна поддержка старых версий — заменить на margin через padding/negative-margin паттерн
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
      ref={ref}
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
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';
