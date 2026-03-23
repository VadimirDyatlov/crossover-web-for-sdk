import { Route, Router, Switch } from 'wouter';
import { CatalogPage } from '@/pages/catalog-page';
import { routerPaths } from '@/shared/lib/router-paths';

export const App = () => {
  return (
    <Router base={routerPaths.root}>
      <Switch>
        <Route path={routerPaths.root}>
          <CatalogPage />
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
