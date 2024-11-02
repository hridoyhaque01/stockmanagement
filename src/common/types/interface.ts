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

type UsePaginationProps<T> = {
  data?: T[];
};

export type { UsePaginationProps };
