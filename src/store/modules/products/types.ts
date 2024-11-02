export interface Product {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  avaragePrice: number;
}

export interface ProductsState {
  products: Product[];
}
