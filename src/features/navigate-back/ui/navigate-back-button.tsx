import type { FC } from 'react';
import { useAppNavigation } from '@/shared/lib';
import { BackButton } from '@/shared/ui';

interface NavigateBackButtonProps {
  className?: string;
  fallbackUrl?: string;
}

export const NavigateBackButton: FC<NavigateBackButtonProps> = (props) => {
  const { className, fallbackUrl } = props;
  const { goBack } = useAppNavigation();

  return <BackButton className={className} onClick={() => goBack(fallbackUrl)} />;
};
