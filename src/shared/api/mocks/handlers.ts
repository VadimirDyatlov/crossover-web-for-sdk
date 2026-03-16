import { http, HttpResponse } from 'msw';
import {
  mockMerchant,
  mockProductDetails,
  mockProducts1,
  mockProducts2,
  mockProducts3,
  mockProducts4,
  pagination,
} from './mocks';

export const merchantHandler = http.get('/crossover/v1/merchant', () => {
  return HttpResponse.json(mockMerchant);
});

export const productListHandlers = [
  http.get('/crossover/v1/product/list/1', () => {
    return HttpResponse.json({
      pagination,
      products: mockProducts1,
    });
  }),
  http.get('/crossover/v1/product/list/2', () => {
    return HttpResponse.json({
      pagination,
      products: mockProducts2,
    });
  }),
  http.get('/crossover/v1/product/list/3', () => {
    return HttpResponse.json({
      pagination,
      products: mockProducts3,
    });
  }),
  http.get('/crossover/v1/product/list/4', () => {
    return HttpResponse.json({
      pagination,
      products: mockProducts4,
    });
  }),
];

export const productDetailsHandlers = http.get(
  '/crossover/v1/product/:id',
  ({ params }) => {
    const productId = params.id;
    const product = mockProductDetails.find(({ id }) => id === productId);

    if (!product) {
      return HttpResponse.json({ error: 'Товар не найден' }, { status: 404 });
    }

    return HttpResponse.json(product);
  },
);
