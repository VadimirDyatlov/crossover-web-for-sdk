import { Router, Route, Switch } from 'wouter';
import { CatalogPage } from '@/pages/catalog-page';
import { CartPage } from '@/pages/cart-page';
import { MyOrdersPage } from '@/pages/my-orders-page';
import { routerPaths } from '@/shared/lib';

export const App = () => {
  return (
    <Router base={routerPaths.root}>
      <Switch>
        <Route path={routerPaths.root}>
          <CatalogPage />
        </Route>
        <Route path={routerPaths.cartPage}>
          <CartPage /> 
        </Route>
        <Route path={routerPaths.myOrders}>
          <MyOrdersPage />
        </Route>
        <Route>
          <div>not-found</div>
        </Route>
      </Switch>
    </Router>
  );
};

// TODO: npm run lint ошибка
// TODO: npm run test:coverage ошибка
// TODO: Корзина
// TODO: Мои заказы
// TODO: Доработать ts,prettier,eslint config
