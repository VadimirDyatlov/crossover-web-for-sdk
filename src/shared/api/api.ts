import { mswReadyPromise } from './msw-ready';

// В dev-режиме ждём готовности MSW перед первым запросом
const ready =
  import.meta.env.DEV || import.meta.env.VITE_ENABLE_MSW === 'true'
    ? mswReadyPromise
    : Promise.resolve();

// TODO: Написать кастомный fetch.
export const getMerchant = () => ready.then(() => fetch('/crossover/v1/merchant'));

export const getProductList = (id: string, signal?: AbortSignal) =>
  ready.then(() => fetch(`/crossover/v1/product/list/${id}`, { signal }));

export const getProductDetails = (id: string) =>
  ready.then(() => fetch(`/crossover/v1/product/${id}`));

export const getOrderList = () => ready.then(() => fetch('/crossover/v1/order/list'));

export const getOrderDetails = (id: string) =>
  ready.then(() => fetch(`/crossover/v1/order/${id}`));
