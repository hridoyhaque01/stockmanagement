import { UsePaginationProps } from "@/common/types";
import DynamicPagination from "@/components/shared/DynamicPagination";
import { useEffect, useState } from "react";

function usePagination<T>({ data = [] }: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const totalPages = Math.ceil(data.length / rowPerPage);
  const indexOfLastRow = currentPage * rowPerPage;
  const indexOfFirstRow = indexOfLastRow - rowPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  const pagination =
    totalPages == 0 ? (
      <div></div>
    ) : (
      <DynamicPagination
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    );

  useEffect(() => {
    if (totalPages < currentPage) {
      setCurrentPage(totalPages);
    } else if (totalPages > currentPage && currentPage == 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return {
    pagination,
    currentRows,
    currentPage,
    setCurrentPage,
    rowPerPage,
    setRowPerPage,
  };
}

export default usePagination;
