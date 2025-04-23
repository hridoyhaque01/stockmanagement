export interface Supplier {
  id: string;
  supplierName: string;
  supplierEmail: string;
  supplierPhone: string;
  supplierAddress: string;
  totalDue: number;
  totalPaid: number;
  totalBalance: number;
  timestamp: number;
}

export interface SuppliersState {
  suppliers: Supplier[];
}
