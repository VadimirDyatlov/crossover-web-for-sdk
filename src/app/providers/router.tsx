import { CartPage } from '@/pages/cart-page';
import { CatalogPage } from '@/pages/catalog-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { OrdersSkeleton } from '@/pages/orders-page';
import { createLazyComponent, routerPaths } from '@/shared/lib';
import { AnimatedSwitch } from '@/shared/lib/mini-motion/animated-switch';
import { RouteDef } from '@/shared/lib/mini-motion/route-def';

const PAGES = {
  Orders: createLazyComponent(
    () => import('@/pages/orders-page').then((m) => ({ default: m.OrdersPage })),
    <OrdersSkeleton />,
  ),
} as const;

export const Routing = () => {
  return (
    <AnimatedSwitch>
      <RouteDef path={routerPaths.root} component={CatalogPage} />
      <RouteDef path={routerPaths.cart} component={CartPage} />
      <RouteDef path={routerPaths.orders} component={PAGES.Orders} />
      <RouteDef path="*" component={NotFoundPage} />
    </AnimatedSwitch>
  );
};
