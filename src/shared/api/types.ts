export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
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

export interface MerchantResponse {
  pointId: string;
  name: string;
  logoUrl: string;
  address: string;
  qrData: string;
  infoWidget: InfoWidget;
  status: Status;
  category: Category[];
}

export interface ErrorResponse {
  errorCode: number;
  error: string;
  message: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductResponse {
  products: Product[];
  pagination: Pagination;
}

export interface ProductDetail {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  specifications: string;
}

export interface Order {
  orderId: string;
  orderTime: string;
  merchantInfo: {
    pointId: string;
    name: string;
    logoUrl: string;
    address: string;
  };
  verificationCode: string;
  status: string;
  totalItems: number;
  totalAmount: number;
  description: string;
  localSessionId: string;
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
  products: OrderDetail[];
}
