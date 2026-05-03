// TODO: Можно перенести типы в сущности
export interface MerchantResponse {
  address: string;
  category: Category[];
  infoWidget: InfoWidget;
  logoUrl: string;
  name: string;
  pointId: string;
  qrData: string;
  status: Status;
  timeToPrepare: number;
}

export interface InfoWidget {
  description: string;
  picture: string;
}

export interface Status {
  active: boolean;
  reason: string;
}

export interface Category {
  id: string;
  name: string;
  size: number;
}

export interface ErrorResponse {
  errorCode: number;
  error: string;
  message: string;
}

export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  timeToPrepare: number;
  unitOfMeasurement: string;
}

export interface ProductResponse {
  products: Product[];
  pagination: Pagination;
}

export interface ProductDetail {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  timeToPrepare: number;
  unitOfMeasurement: string;
}

export interface Order {
  localSessionId: string;
  merchantInfo: MerchantInfo;
  orderId: string;
  orderTime: string;
  status: string;
  statusParams: StatusParams;
  totalAmount: number;
  totalItems: number;
  verificationCode: string;
}

export interface MerchantInfo {
  address: string;
  logoUrl: string;
  name: string;
  pointId: string;
};

export interface StatusParams {
  code: string;
  color: string;
}

export interface OrderResponse {
  orders: Order[];
  pagination: Pagination;
}

export interface OrderDetail {
  quantity: number;
  product: Product;
}

export interface OrderDetailResponse {
  cart: OrderDetailProduct[];
  localSessionId: string;
  merchantInfo: MerchantInfo;
  orderId: string;
  orderTime: string;
  status: StatusParams;
  totalAmount: number;
  totalItems: number; 
  verificationCode: string;
}

export interface OrderDetailProduct {
  costPrice: number;
  imageUrl: string;
  name: string;
  productId: string;
  quantity: number;
  unitOfMeasurement: string;
}

export interface StatusParams {
  code: string;
  color: string;
  text: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface GetMerchantParams {
  extBranchId: string;
}

export interface GetProductListParams extends Partial<PaginationRequest> {
  categoryId: string;
  pointId: string;
}

export interface GetOrderListParams extends Partial<PaginationRequest> {
  extBranchId: string;
  subId: string;
}

export interface PaginationRequest {
  page: number;
  limit: number;
}
