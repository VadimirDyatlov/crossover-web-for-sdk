import { lazy, Suspense, useEffect } from 'react';
import { Route, Router, Switch } from 'wouter';
import { CartPage } from '@/pages/cart-page';
import { CatalogPage, CatalogSkeleton } from '@/pages/catalog-page';
// import { OrdersPage } from '@/pages/orders-page';
import { NavigationProvider, routerPaths } from '@/shared/lib';
import { ErrorBoundary, FullPageError } from '@/shared/ui';

// lazy точно нужен?
const OrdersPageLazy = lazy(() =>
  import('@/pages/orders-page').then((m) => ({ default: m.OrdersPage })),
);

export const App = () => {
  useEffect(() => {
    const splash = document.getElementById('splash');
    if (!splash) return;
    splash.style.opacity = '0';
    const t = setTimeout(() => splash.remove(), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <ErrorBoundary>
      <Router base={routerPaths.root}>
        <NavigationProvider>
          <Switch>
            <Route path={routerPaths.root}>
              <CatalogPage />
            </Route>
            <Route path={routerPaths.cartPage}>
              <CartPage />
            </Route>
            {/* <Route path={routerPaths.myOrders}>
          <OrdersPage />
        </Route> */}
            <Route path={routerPaths.myOrders}>
              {/* TODO: Скелетон для OrdersPage */}
              {/* <Suspense fallback={<div className="h-[100dvh] w-full bg-red-500" />}> */}
              <Suspense fallback={<CatalogSkeleton />}>
                <OrdersPageLazy />
              </Suspense>
            </Route>
            <Route>
              {/* <div>not-found</div> */}
              <FullPageError onBack={() => window.history.back()} />
            </Route>
          </Switch>
        </NavigationProvider>
      </Router>
    </ErrorBoundary>
  );
};

// TODO: npm run lint ошибка
// TODO: npm run test:coverage ошибка
// TODO: Корзина
// TODO: Мои заказы
// TODO: Доработать ts,prettier,eslint config
// TODO: Мемоизация
// WebkitOverflowScrolling: 'touch' ?

// + 1) В index.html нужно <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
//
// для айфон 10+ контент может занять всю область экрана

// +?? 2) В src/entities/cart-button/ui/cart-button.tsx Жёстко задан bottom-[50px] без учёта SafeArea
// решение
// .cart-button { bottom: calc(50px + env(safe-area-inset-bottom, 0px)); } Зачем?!
// вы должны занять всю доступную высоту? как это сделать? сейчас я костыльно добился этого
// 100dvh + safe-area-inset-top + safe-area-inset-bottom
// в этом случае bottom: 50px будет считаться от нижнего края экрана и прибовлять ничего не надо

// - 3) Потенциальная проблема -
// backdrop-filter дорогой и может вызывать потерю кадров на слабых устройствах в в catalog-bar
// - backdrop-filter больше не используется

// - 4) В product-card
// ref={(img)=> {if (!img)return;const original = new Image();original.onload= () => (img.src= card.imageUrl);original.src= card.imageUrl;}}
// создаётся новый Image() объект при каждом callback, потенциальный memory leak при быстром скролле
// - теперь используется компонент SmartImage(требует проверки)

// + 5) В анимированных элементах нужно свойство - will-change . СНизит нагрузки с цпу и преенест ее на гпу

// + 6) В index.css - no-scroll тоже бы 100 vh поменять на dvh
// +? 7) Не увидел svh lvh нигде в проекте. Для элементов, которые должны быть стабильны (модалка), лучше 100svh
// + 8) Кажется нужно глобавльно скроллбар скрывать @media (max-width: 991px) *::-webkit-scrollbar { width: 0px }
// + 9) я бы добавл scrollbar-gutter: stable чтобы не пригала ширина при открытии модалки например
// + 10) я бы добавил html { touch-action: manipulation; }
// + 11) В MerchantInfo опечатка нужно object-cover - object-cove"/>

// + 12) Без ленивой загрузки
// <Route path={routerPaths.myOrders}><MyOrdersPage /></Route>
// правильно понимаю что унжна ленивая загрузка? получаем небольшую задержку при переходе в OrdersPage(поставил скелетон пока идет загрузка)
// мы загружаеимся чуть быстрее, но получаем долгий первый переход на страницу OrdersPage

// + 13) svg иконки импортируются как URL-строки (import Basket from '../icon/basket.svg'), хотя vite-plugin-svgr подключён стоит использовать как компоненты для инлайна мелких SVG в бандл
// + 14) radix-ui и zustand не вынесены в отдельные чанки
// (вырезал radix-ui)

// ? 15) Для инфо - import.meta.env.MODE всегда true. MSW будет запускаться даже в production-сборке, перехватывая реальные API-запросы и возвращая моки в main.tsx
// мы же вырежем import.meta.env.MODE потом из кода?

// ? 16) Пока не критика для инфо - нет production Service Worker нет кэширования ресурсов, нет оффлайн-поддержки
// export default defineConfig({
// plugins: [
// VitePWA({
// registerType: 'autoUpdate',
// workbox: {
// globPatterns: ['*/.{js,css,html,ico,png,svg}'] // Что кэшировать?
// }
// })
// ]
// })
// production Service Worker как реализовать?

// + 17) Нет ErrorBoundary в приложении

// +? 18) Нет window.onerror / window.onunhandledrejection. Необработанные исключения покажут стандартный экран ошибки браузера
// Точно нужно??? на паузе

// ? 19) На будущее
// + 1) нет проверки и отображения error компонента
// - 2) Нет обработки http статусов

// + 20) CatalogPage при первой загрузке: fetchMerchant() выполняется, но пока грузится MerchantInfo получает name=undefined, address=undefined, logoUrl=undefined. Показывается пустая область с <img src={undefined}>
// ? 21) CategorySelector зависит от merchant data. Пока не загружен массив пустой

// 22) ProductsBlock нет loading-state. data начинается как [], пользователь видит пустое пространство
// ?кастам фетч 23) Опциоально - Нет возможности отменить загрузку AbortController не используется

// + 24) Нет splash screen между загрузкой JS-бандла и первым рендером белый экран
// при запуске сначала нативный лоудер, мерцание, наш лоудер. выглядит не оч
// 1) спросить у дизайнеров
// 2) переделать не скелетон?

// 25) Нет обработчиков popstate. wouter использует browser history API напрямую без кастомных обработчиков
// 1) Нет обработчиков popstate. Зачем обрабатывать popstate если кнопки назад не будет? какая обработка предполагается?
// 2) wouter использует browser history API напрямую без кастомных обработчиков. Какие кастомные обработчики нам нужны?

// 26) Не перехватывается кнопка «Назад» Android. При нажатии «Назад» из MyOrdersPage браузер выполнит стандартное действие (может выйти из WebView)
// Что за кнопка «Назад»? браузерная кнопка? браузера не будет и кнопки тоже.
// (может выйти из WebView) ??? не понял

// 27) Модалка ProductDetails не использует history при нажатии «Назад» в Android вместо закрытия модалки произойдёт навигация назад в history
// Точно нужно обрабатывать нажатие кнопки «Назад»? в модалке нет кнопки назад, есть крестик закрыть. Про какую кнопку идет речь?
// Я понимаю если мы в браузере открыли деталку и если нажать браузерную кнопку назад должна закрыться модалка, а у нас переходит на предыдущую страницу
// нам это точно нужно? если в вебвью не будет браузерной кнопки назад

// 28) У нас модалка реализована как fullscreen overlay . М мобилках же обычно выязжающая снизу модалка , так привычней дя пользователей(в работе)

// 29) Отсутствуют бибилиотеки для жестов (в работе, либа 'vaul')
