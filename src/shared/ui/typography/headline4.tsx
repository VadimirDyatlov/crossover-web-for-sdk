import { cn } from '@/shared/lib';
import type { FC, ReactNode } from 'react';

interface Headline4Props {
  className?: string;
  children: ReactNode;
}

export const Headline4: FC<Headline4Props> = (props) => {
  const { className, children } = props;

  return (
    <span
      className={cn(
        'font-SBSansDisplay text-[17px] font-semibold leading-[20px] tracking-normal',
        className,
      )}
    >
      {children}
    </span>
  );
};
