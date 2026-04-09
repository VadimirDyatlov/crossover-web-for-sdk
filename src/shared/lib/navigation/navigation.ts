import { routerPaths } from '@/shared/lib';
import { useAnimatedNavigate } from './use-animated-navigate';
import { usePrevious } from './use-previous';

export const useAppNavigation = () => {
  const navigate = useAnimatedNavigate();
  const { location, previousLocation } = usePrevious();

  const closeApp = () => {
    navigate(routerPaths.close);
  };

  const openMyOrders = () => {
    navigate(routerPaths.myOrders);
  };

  const openCart = () => {
    navigate(routerPaths.cartPage);
  };

  const goBack = (fallbackUrl = '/') => {
    if (previousLocation && previousLocation !== location) {
      navigate(previousLocation, 'back');
    } else {
      navigate(fallbackUrl, 'back');
    }
  };

  return { closeApp, openMyOrders, openCart, goBack, };
};
