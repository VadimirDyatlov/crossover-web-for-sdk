import { useLocation } from 'wouter';
import { routerPaths } from '@/shared/lib';
// Прямой импорт из ./bridge, а не из барреля '@/shared/lib' — navigation.ts сам
// реэкспортируется этим баррелем, замыкать импорт на себя не стоит.
import { trackAction, USER_ACTION } from '../bridge';
import { useAnimatedNavigate } from './use-animated-navigate';
import { usePrevious } from './use-previous';

export const useAppNavigation = () => {
  const navigate = useLocation()[1];
  const animatedNavigate = useAnimatedNavigate();
  const { location, previousLocation } = usePrevious();

  const closeApp = () => {
    // Закрытие WebView — нативке нужно знать, чтобы свернуть/выгрузить экран
    trackAction(USER_ACTION.APP_CLOSE);
    animatedNavigate(routerPaths.close);
  };

  const openMyOrders = () => {
    trackAction(USER_ACTION.ORDERS_OPEN);
    animatedNavigate(routerPaths.myOrders);
  };

  const openCart = () => {
    trackAction(USER_ACTION.CART_OPEN);
    animatedNavigate(routerPaths.cartPage);
  };

  const openSearch = () => {
    trackAction(USER_ACTION.SEARCH_QUERY, { stage: 'open' });
    animatedNavigate(routerPaths.searchPage);
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

  return { closeApp, openMyOrders, openCart, openSearch, goBack, openCatalog };
};
