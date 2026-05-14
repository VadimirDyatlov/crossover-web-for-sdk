// Реестр доменных пользовательских действий. Один источник правды для имён:
// и веб (emit), и нативка (разбор) ссылаются на эти строки. Строки вместо enum —
// чтобы значение читалось в логах нативки как есть.

export const USER_ACTION = {
  // Жизненный цикл / навигация
  NAVIGATION: 'navigation',
  APP_FOREGROUND: 'app.foreground',
  APP_BACKGROUND: 'app.background',
  APP_CLOSE: 'app.close',

  // Корзина
  CART_ADD: 'cart.add',
  CART_REMOVE_ONE: 'cart.remove_one',
  CART_OPEN: 'cart.open',
  CART_PAY: 'cart.pay',

  // Каталог / товары
  CATEGORY_SELECT: 'category.select',
  PRODUCT_OPEN: 'product.open',

  // Заказы
  ORDERS_OPEN: 'orders.open',
  ORDER_OPEN: 'order.open',

  // Поиск
  SEARCH_QUERY: 'search.query',

  // Поддержка
  SUPPORT_CALL: 'support.call',

  // Ошибки
  ERROR_JS: 'error.js',
} as const;

export type UserActionName = (typeof USER_ACTION)[keyof typeof USER_ACTION];

// Системное событие-обёртка, которым все пользовательские действия уходят в нативку.
// Нативка подписывается на 'user.action' и разбирает payload.action по USER_ACTION.
export const BRIDGE_EVENT = {
  USER_ACTION: 'user.action',
} as const;
