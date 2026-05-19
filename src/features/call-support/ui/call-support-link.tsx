import type { FC } from 'react';
import { cn, USER_ACTION } from '@/shared/lib';

interface CallSupportLinkProps {
  className?: string;
}

export const CallSupportLink: FC<CallSupportLinkProps> = ({ className }) => {
  return (
    <a
      href="tel:900"
      // Декларативный трекинг: глобальный слушатель трекера поймёт data-track
      // по клику и отправит событие в нативку — отдельный onClick не нужен
      data-track={USER_ACTION.SUPPORT_CALL}
      data-track-phone="900"
      className={cn('inline-block active:opacity-50 transition-opacity', className)}
    >
      <span className="text-[rgb(11,140,11)]">900</span>
    </a>
  );
};
