export interface Grain {
  grainHistoryId: string;
  quantityLeft: number;
}

export interface Order {
  grainId: string;
  quantity: number;
  price: number;
  sellingPrice: number;
  category: string;
  grains: Grain[];
}

export interface Customer {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  totalDue: number;
  totalPaid: number;
  totalBalance: number;
}

export interface Sale {
  id: string;
  totalQuantity: number;
  totalPrice: number;
  totalDue: number;
  totalPaid: number;
  type: string;
  orders: Order[];
  customer: Customer;
}

export interface SalesState {
  sales: Sale[];
}
