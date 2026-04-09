import BackArrow from './icon/back-arrow.svg';
import { cn } from '@/shared/lib';
import type { FC } from 'react';

interface BackButtonProps {
  className?: string;
  onClick: () => void;
}

export const BackButton: FC<BackButtonProps> = (props) => {
  const { className, onClick } = props;

  return (
    <button
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
