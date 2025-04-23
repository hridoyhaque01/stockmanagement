import { getTableIndex } from "@/common/constants";
import { ProductSuppliesTableProps } from "@/common/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { sortProductSupplies } from "@/store/modules/supplies/slice";
import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TableResponseHandler } from "./TableHandler";

function ProductHistoriesTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: ProductSuppliesTableProps) {
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortProductSupplies("desc"));
    } else {
      setType("asc");
      dispatch(sortProductSupplies("asc"));
    }
  };

  return (
    <>
      <Table className="">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-green-400 hover:bg-green-400">
            <TableHead className=" text-white truncate">Serial</TableHead>
            <TableHead className=" text-white truncate">
              <button className="flex items-center gap-2" onClick={toggleSort}>
                <span>Date</span>
                <ArrowDownUpIcon className="w-5 h-5" />
              </button>
            </TableHead>
            <TableHead className="text-white truncate">Supplier Name</TableHead>
            <TableHead className="text-white truncate">
              Supplier Phone
            </TableHead>
            <TableHead className="text-white truncate">Quantity</TableHead>
            <TableHead className="text-white truncate">Total Price</TableHead>
            <TableHead className=" text-white truncate">Total Paid</TableHead>
            <TableHead className=" text-white truncate">Total Due</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableResponseHandler
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
            isFound={isFound}
            column={8}
            isNotFound={isNotFound}
          >
            {currentRows?.map((item, index) => (
              <TableRow key={item?.id}>
                <TableCell>
                  {getTableIndex({
                    currentPage: currentPage,
                    rowsPerPage: 10,
                    index: index,
                  })}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {new Date(item?.proccessTime * 1000).toDateString()}
                </TableCell>
                <TableCell>{item?.supplier?.supplierName || "N/A"}</TableCell>
                <TableCell>{item?.supplier?.supplierPhone || "N/A"}</TableCell>
                <TableCell>{item?.quantity}</TableCell>
                <TableCell>৳ {item?.price}</TableCell>
                <TableCell>৳ {item?.paidAmount}</TableCell>
                <TableCell>৳ {item?.dueAmount}</TableCell>
              </TableRow>
            ))}
          </TableResponseHandler>
        </TableBody>
      </Table>
      <div className="py-4">{pagination}</div>
    </>
  );
}

export default ProductHistoriesTable;
