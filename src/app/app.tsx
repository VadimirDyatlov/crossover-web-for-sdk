import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CatalogPage } from '@/pages/catalog-page';
import { routerPaths } from '@/shared/lib/router-paths';

const router = createBrowserRouter([
  {
    path: routerPaths.unknown,
    element: <div>not-found</div>,
  },
  {
    path: routerPaths.root,
    element: <CatalogPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

// TODO: npm run lint ошибка
// TODO: npm run test:coverage ошибка
// TODO: Корзина
// TODO: Мои заказы
// TODO: Доработать ts,prettier,eslint config
