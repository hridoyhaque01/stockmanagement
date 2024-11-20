export interface Product {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  avaragePrice?: number;
}

interface GrainSupplies {
  suppliesId: string;
  quantity: number;
}

export interface Grain {
  id: string;
  quantity: number;
  price: number;
  product: Product;
  timestamp: number;
}

export interface HistoryGrain {
  id: string;
  quantity: number;
  price: number;
}

export interface GrainHistory {
  id: string;
  productQuantity: number;
  quantity: number;
  quantityLeft: number;
  price: number;
  productCategory: string;
  grainCategory: string;
  supplies: GrainSupplies[];
  type: string;
  grain: HistoryGrain;
  product: Product;
  timestamp: number;
  proccessTime: number;
}

export interface GrainsState {
  grains: Grain[];
  grainHistories: GrainHistory[];
}
