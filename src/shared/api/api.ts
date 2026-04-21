// TODO: Написать кастомный fetch.
export const getMerchant = () => fetch('/crossover/v1/merchant');

export const getProductList = (id: string, signal?: AbortSignal) =>
  fetch(`/crossover/v1/product/list/${id}`, { signal });

export const getProductDetails = (id: string) =>
  fetch(`/crossover/v1/product/${id}`);

export const getOrderList = () => fetch('/crossover/v1/order/list');

export const getOrderDetails = (id: string) => fetch(`/crossover/v1/order/${id}`);
