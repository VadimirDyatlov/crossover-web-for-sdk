import { useLocation } from 'wouter';
import { routerPaths } from '@/shared/lib';
import { TransitionPresetName } from '../mini-motion';
import { usePrevious } from './use-previous';

export const useAppNavigation = () => {
  const navigate = useLocation()[1];
  const { location, previousLocation } = usePrevious();

  const closeApp = () => {
    navigate(routerPaths.close);
  };

  const openMyOrders = () => {
    navigate(routerPaths.orders, {
      state: {
        animate: TransitionPresetName.SlideForward,
      },
    });
  };

  const openCart = () => {
    navigate(routerPaths.cart, {
      state: {
        animate: TransitionPresetName.SlideForward,
      },
    });
  };

  const openSearch = () => {
    animatedNavigate(routerPaths.searchPage);
  };

  const goBack = (fallbackUrl = '/') => {
    if (previousLocation && previousLocation !== location) {
      navigate(previousLocation, {
        state: {
          animate: TransitionPresetName.SlideBack,
        },
      });
    } else {
      navigate(fallbackUrl, {
        state: {
          animate: TransitionPresetName.SlideBack,
        },
      });
    }
  };

  const openCatalog = (animate: string = TransitionPresetName.SlideBack) => {
    navigate(routerPaths.root, {
      state: { animate },
    });
  };

  return { closeApp, openMyOrders, openCart, openSearch, goBack, openCatalog };
};
