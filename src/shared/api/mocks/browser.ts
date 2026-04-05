import { setupWorker } from 'msw/browser';
import {
  merchantHandler,
  orderDetailsHandler,
  orderListHandler,
  productDetailsHandlers,
  productListHandlers,
} from './handlers';

export const worker = setupWorker(
  merchantHandler,
  ...productListHandlers,
  productDetailsHandlers,
  orderListHandler,
  orderDetailsHandler,
);
