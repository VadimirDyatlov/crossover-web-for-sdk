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

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface ProductsResponse {
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
