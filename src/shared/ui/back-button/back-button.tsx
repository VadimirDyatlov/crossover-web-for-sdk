import { useBackButton } from './lib/back-button';
import BackArrow from './icon/back-arrow.svg';
import type { FC } from 'react';
import { cn } from '@/shared/lib';

interface BackButtonProps {
  fallbackUrl?: string;
  className?: string;
}

export const BackButton: FC<BackButtonProps> = (props) => {
  const { fallbackUrl, className } = props;
  const handleBack = useBackButton(fallbackUrl)

  return (
    <button 
      className={cn('flex items-center justify-center p-2.5 cursor-pointer bg-none border-none', className)}
      onTouchStart={handleBack}
    >
      <img src={BackArrow}/>
    </button>
  );
};
