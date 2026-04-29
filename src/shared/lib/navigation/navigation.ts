import { useLocation } from 'wouter';
import { routerPaths } from '@/shared/lib';
import { useAnimatedNavigate } from './use-animated-navigate';
import { usePrevious } from './use-previous';

export const useAppNavigation = () => {
  const navigate = useLocation()[1];
  const animatedNavigate = useAnimatedNavigate();
  const { location, previousLocation } = usePrevious();

  const closeApp = () => {
    animatedNavigate(routerPaths.close);
  };

  const openMyOrders = () => {
    animatedNavigate(routerPaths.myOrders);
  };

  const openCart = () => {
    animatedNavigate(routerPaths.cartPage);
  };

  const goBack = (fallbackUrl = '/') => {
    if (previousLocation && previousLocation !== location) {
      animatedNavigate(previousLocation, 'back');
    } else {
      animatedNavigate(fallbackUrl, 'back');
    }
  };

  const openCatalog = () => {
    navigate(routerPaths.root);
  };

  return { closeApp, openMyOrders, openCart, goBack, openCatalog };
};
