export const MODAL = {
  PRODUCT_DETAILS: 'PRODUCT_DETAILS',
  ORDER_DETAILS: 'ORDER_DETAILS',
} as const;

export type ModalName = (typeof MODAL)[keyof typeof MODAL];
