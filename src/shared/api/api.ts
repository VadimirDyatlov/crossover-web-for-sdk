import type { types } from '@/shared/api';
import { request } from './base';

export const getMerchant = (extBranchId: string) =>
  request<types.MerchantResponse, types.GetMerchantParams>(
    '/crossover/v1/merchant',
    { extBranchId },
  );

export const getProductList = (
  params: types.GetProductListParams,
  signal?: AbortSignal,
) =>
  request<types.ProductResponse, types.GetProductListParams>(
    '/crossover/v1/product/list',
    params,
    { signal },
  );

export const getProductDetails = (id: string) =>
  request<types.ProductDetail>(`/crossover/v1/product/${id}`);

export const getOrderList = (params: types.GetOrderListParams) =>
  request<types.OrderResponse, types.GetOrderListParams>(
    '/crossover/v1/order/list',
    params,
  );

export const getOrderDetails = (id: string) =>
  request<types.OrderDetailResponse>(`/crossover/v1/order/${id}`);
