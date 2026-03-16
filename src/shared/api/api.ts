export const getMerchant = () => fetch('/crossover/v1/merchant');

export const getProductList = (id: string) => fetch(`/crossover/v1/product/list/${id}`);

export const getProductDetails = (id: string) => fetch(`/crossover/v1/product/${id}`);
