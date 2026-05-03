import type { FC, ReactNode } from 'react';
import { cn } from '@/shared/lib';

interface Headline5Props {
  children: ReactNode;
  className?: string;
}

export const Headline5: FC<Headline5Props> = (props) => {
  const { children, className } = props;

  return (
    <span
      className={cn(
        'font-SBSansDisplay text-[28px]',
        'font-semibold leading-[20px] tracking-normal',
        className,
      )}
    >
      {children}
    </span>
  );
};
