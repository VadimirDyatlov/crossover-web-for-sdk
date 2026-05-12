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
    // animate: 'slide',
    //  animate: 'slide-back',
  };

  const openMyOrders = () => {
    // animatedNavigate(routerPaths.myOrders);
    navigate(routerPaths.myOrders, {
      state: {
        animate: 'slide',
      },
    });
  };

  const openCart = () => {
    // animatedNavigate(routerPaths.cartPage);
    navigate(routerPaths.cartPage, {
      state: {
        animate: 'slide',
      },
    });
  };

  const goBack = (fallbackUrl = '/') => {
    if (previousLocation && previousLocation !== location) {
      // animatedNavigate(previousLocation, 'back');
      navigate(previousLocation, {
        state: {
          animate: 'slide-back',
        },
      });
    } else {
      // animatedNavigate(fallbackUrl, 'back');
      navigate(fallbackUrl, {
        state: {
          animate: 'slide-back',
        },
      });
    }
  };

  const openCatalog = (animate = 'slide-back') => {
    // navigate(routerPaths.root);
    navigate(routerPaths.root, {
      state: { animate },
    });
  };

  return { closeApp, openMyOrders, openCart, goBack, openCatalog };
};
