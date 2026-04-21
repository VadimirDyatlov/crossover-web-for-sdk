import { setupServer } from 'msw/node';
import {
  merchantHandler,
  orderDetailsHandler,
  orderListHandler,
  productDetailsHandlers,
  productListHandlers,
} from './handlers';

export const server = setupServer(
  merchantHandler,
  ...productListHandlers,
  productDetailsHandlers,
  orderListHandler,
  orderDetailsHandler,
);
