import { useLocation } from 'wouter';
import { routerPaths } from '@/shared/lib';
// Прямой импорт из ./bridge, а не из барреля '@/shared/lib' — navigation.ts сам
// реэкспортируется этим баррелем, замыкать импорт на себя не стоит.
import { trackAction, USER_ACTION } from '../bridge';
import { TransitionPresetName } from '../mini-motion';
import { usePrevious } from './use-previous';

export const useAppNavigation = () => {
  const navigate = useLocation()[1];
  const { location, previousLocation } = usePrevious();

  const closeApp = () => {
    trackAction(USER_ACTION.APP_CLOSE);
    navigate(routerPaths.close);
  };

  const openMyOrders = () => {
    trackAction(USER_ACTION.ORDERS_OPEN);
    navigate(routerPaths.orders, {
      state: {
        animate: TransitionPresetName.SlideForward,
      },
    });
  };

  const openCart = () => {
    trackAction(USER_ACTION.CART_OPEN);
    navigate(routerPaths.cart, {
      state: {
        animate: TransitionPresetName.SlideForward,
      },
    });
  };

  const openSearch = () => {
    trackAction(USER_ACTION.SEARCH_QUERY, { stage: 'open' });
    navigate(routerPaths.search, {
      state: {
        animate: TransitionPresetName.SlideForward,
      },
    });
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
