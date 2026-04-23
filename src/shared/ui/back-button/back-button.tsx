import type { FC } from 'react';
import { cn } from '@/shared/lib';
import BackArrow from './icon/back-arrow.svg';

interface BackButtonProps {
  className?: string;
  onClick: () => void;
}

export const BackButton: FC<BackButtonProps> = (props) => {
  const { className, onClick } = props;

  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-center',
        'p-2.5',
        'cursor-pointer bg-none border-none',
        className,
      )}
      onClick={onClick}
    >
      <img src={BackArrow} />
    </button>
  );
};
