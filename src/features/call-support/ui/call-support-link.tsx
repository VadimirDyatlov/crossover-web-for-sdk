import type { FC } from 'react';
import { cn } from '@/shared/lib';

interface CallSupportLinkProps {
  className?: string;
}

export const CallSupportLink: FC<CallSupportLinkProps> = ({ className }) => {
  return (
    <a
      href="tel:900"
      className={cn('inline-block active:opacity-50 transition-opacity', className)}
    >
      <span className="text-[rgb(11,140,11)]">900</span>
    </a>
  );
};
