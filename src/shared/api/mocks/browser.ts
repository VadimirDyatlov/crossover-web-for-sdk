import { setupWorker } from 'msw/browser';
import {
  merchantHandler,
  productDetailsHandlers,
  productListHandlers,
} from './handlers';

export const worker = setupWorker(
  merchantHandler,
  ...productListHandlers,
  productDetailsHandlers,
);
