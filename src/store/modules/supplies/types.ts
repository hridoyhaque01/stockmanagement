export interface Product {
  id: string;
  productId: string;
  productName: string;
  totalPrice: number;
}

export interface Supplier {
  id: string;
  supplierName: string;
  supplierPhone: string;
}

export interface Supplies {
  id: string;
  quantity: number;
  productLeft: number;
  dueAmount: number;
  paidAmount: number;
  price: number;
  type: string;
  category: string;
  product: Product;
  supplier: Supplier;
}

export interface SuppliesState {
  supplies: Supplies[];
}
