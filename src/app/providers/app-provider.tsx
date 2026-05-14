import type { FC, PropsWithChildren } from 'react';
import { useAppNavigation, useBridgeTracking } from '@/shared/lib';
import { FullPageError } from '@/shared/ui';
import { useBackNavigation } from '../lib/use-back-navigation';
import { useMerchantInit } from '../lib/use-merchant-init';
import { useModalHistory } from '../lib/use-modal-history';
import { useSplashScreen } from '../lib/use-splash-screen';

export const AppProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { isReady, error } = useMerchantInit();
  const { closeApp } = useAppNavigation();

  useSplashScreen();
  useModalHistory();
  useBackNavigation();
  // Событийная шина js-bridge: трекинг навигации, фона/переднего плана и DOM-действий
  useBridgeTracking();

  if (error) return <FullPageError onBack={closeApp} actionLabel="Закрыть" />;
  if (!isReady) return null;

  return <>{children}</>;
};
