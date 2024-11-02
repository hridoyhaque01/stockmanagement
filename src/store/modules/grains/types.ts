export interface Product {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  avaragePrice: number;
}

export interface Grain {
  id: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface GrainsState {
  grains: Grain[];
}
