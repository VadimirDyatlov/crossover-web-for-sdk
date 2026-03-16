export const MODAL = {
  PRODUCT_DETAILS: 'PRODUCT_DETAILS',
} as const;

export type ModalName = (typeof MODAL)[keyof typeof MODAL];
