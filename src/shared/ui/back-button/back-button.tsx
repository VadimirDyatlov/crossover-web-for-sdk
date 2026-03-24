import { useBackButton } from './lib/back-button';
import BackArrow from './icon/back-arrow.svg';
import type { FC } from 'react';

interface BackButtonProps {
  fallbackUrl?: string;
}

export const BackButton: FC<BackButtonProps> = (props) => {
  const handleBack = useBackButton(props?.fallbackUrl)

  return (
    <button 
      className="flex items-center justify-center p-2.5 cursor-pointer bg-none border-none"
      onTouchStart={handleBack}
    >
      <img src={BackArrow}/>
    </button>
  );
};
