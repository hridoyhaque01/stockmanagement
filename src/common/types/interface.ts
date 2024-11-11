import { Customer } from "@/store/modules/customers/types";
import { Grain, GrainHistory } from "@/store/modules/grains/types";
import { Product } from "@/store/modules/products/types";
import { Sale, SaleOrder } from "@/store/modules/sales/types";
import { Supplier } from "@/store/modules/suppliers/types";
import { Supplies } from "@/store/modules/supplies/types";
import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface DynamicPaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface PageHeaderProps {
  title?: string;
  quantity?: number;
  path?: string;
  pathname?: string;
}

export interface AddSuppliesForm {
  quantity: number;
  price: number;
  paidAmount: number;
  dueAmount: number;
  productId?: string | undefined;
  supplierId?: string | undefined;
  type: string;
  category: string;
  proccessTime?: number | undefined;
}

export interface GrainAddForm {
  productId?: string | undefined;
  productQuantity: number;
  grainQuantity: number;
  price: number;
  type: string;
  productCategory: string;
  grainCategory: string;
  proccessTime?: number | undefined;
}

export interface SupplierAddForm {
  supplierName: string;
  supplierPhone: string;
  supplierEmail?: string;
  supplierAddress?: string;
}

export interface CustomerAddForm {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  customerAddress?: string;
}

export interface SaleGrain {
  grainId: string;
  grainName: string;
  quantity: number;
  price: number;
  sellingPrice: number;
  category: string;
}

export interface ProductTableProps {
  data?: Product[];
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  refetch: () => void;
  children?: ReactNode;
}

export interface SupplierTableProps {
  data?: Supplier[];
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  refetch: () => void;
  children?: ReactNode;
}

export interface CustomerTableProps {
  data?: Customer[];
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  refetch: () => void;
  children?: ReactNode;
}

export interface GrainHistoryTableProps {
  data?: GrainHistory[];
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  refetch: () => void;
  children?: ReactNode;
}

export interface GrainTableProps {
  data?: Grain[];
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  refetch: () => void;
  children?: ReactNode;
}

export interface SalesTableProps {
  data?: Sale[];
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  refetch: () => void;
  children?: ReactNode;
}

export interface SuppliesTableProps {
  data?: Supplies[];
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  refetch: () => void;
  children?: ReactNode;
}

export interface SaleAddForm {
  customerId: string | undefined;
  customerName: string;
  customerPhone: string;
  totalQuantity: number;
  totalPrice: number;
  totalPaid: number;
  totalDue: number;
  type: string;
  orders: SaleOrder[];
}

type UsePaginationProps<T> = {
  data?: T[];
};

export type { UsePaginationProps };
