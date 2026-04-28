import { lazy } from 'react';
import { Route, Switch } from 'wouter';
// TODO: Импортировать скелетоны напрямую из /ui/, а не из index.ts, 
// чтобы избежать разрыва lazy-loading и лишнего веса в основном бандле. ???
import { CartSkeleton } from '@/pages/cart-page';
import { CatalogPage } from '@/pages/catalog-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { OrdersSkeleton } from '@/pages/orders-page';
import { routerPaths } from '@/shared/lib';
import { SuspenseRoute } from '@/shared/ui';

const PAGES = {
  // TODO: С корзиной наверное перебор...
  cart: {
    Component: lazy(() =>
      import('@/pages/cart-page').then((module) => ({ default: module.CartPage })),
    ),
    fallback: <CartSkeleton />,
  },
  orders: {
    Component: lazy(() =>
      import('@/pages/orders-page').then((module) => ({
        default: module.OrdersPage,
      })),
    ),
    fallback: <OrdersSkeleton />,
  },
} as const;

export const Routing = () => (
  <Switch>
    <Route path={routerPaths.root} component={CatalogPage} />
    <SuspenseRoute path={routerPaths.cartPage} {...PAGES.cart} />
    <SuspenseRoute path={routerPaths.myOrders} {...PAGES.orders} />
    <Route component={NotFoundPage} />
  </Switch>
);
