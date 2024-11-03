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
  insertDate?: Date | undefined;
}

export interface GrainAddForm {
  productId?: string | undefined;
  productQuantity: number;
  grainQuantity: number;
  price: number;
  type: string;
  productCategory: string;
  grainCategory: string;
  insertDate?: Date | undefined;
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

type UsePaginationProps<T> = {
  data?: T[];
};

export type { UsePaginationProps };
