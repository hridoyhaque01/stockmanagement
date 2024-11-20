import { Category } from "@/common/types/enums";
import { Customer } from "../customers/types";

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

// export interface Customer {
//   id?: string;
//   customerName?: string;
//   customerEmail?: string;
//   customerPhone?: string;
//   customerAddress?: string;
//   totalDue?: number;
//   totalPaid?: number;
//   totalBalance?: number;
//   timestamp?: number;
// }

export interface Sale {
  id: string;
  totalQuantity: number;
  totalPrice: number;
  totalDue: number;
  totalPaid: number;
  type: string;
  orders: Order[];
  customer: Customer;
  timestamp: number;
  proccessTime: number;
}

export interface SaleOrder {
  grainId: string;
  productName: string;
  quantity: number;
  price: number;
  sellingPrice: number;
  category: Category;
}

export interface SaleDetails {
  totalQuantity: number | null;
  totalPrice: number | null;
  totalPaid: number | null;
  totalDue: number | null;
  type: string | null;
}

export interface SalesState {
  sales: Sale[];
  customerSales: Sale[];
  orders: SaleOrder[];
  customer?: Customer;
  details: SaleDetails;
  isNewCustomer: Boolean;
  selectedOrder: SaleOrder | undefined;
}
