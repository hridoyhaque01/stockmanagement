export interface Customer {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  totalDue: number;
  totalPaid: number;
  totalBalance: number;
  timestamp: number;
}

export interface CustomerState {
  customers: Customer[];
}
