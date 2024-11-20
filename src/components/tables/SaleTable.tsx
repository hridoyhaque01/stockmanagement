import { getTableIndex } from "@/common/constants";
import { SalesTableProps } from "@/common/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { sortSales } from "@/store/modules/sales/slice";
import { ArrowDownUpIcon, PrinterIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TableResponseHandler } from "./TableHandler";

function SaleTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: SalesTableProps) {
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortSales("desc"));
    } else {
      setType("asc");
      dispatch(sortSales("asc"));
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
            <TableHead className="w-[150px] text-white  truncate">
              Customer Name
            </TableHead>
            <TableHead className="text-white  truncate">
              Customer Phone
            </TableHead>
            <TableHead className="text-white  truncate">Quantity</TableHead>
            <TableHead className="text-white  truncate">Total Amount</TableHead>
            <TableHead className=" text-white  truncate">Paid Amount</TableHead>
            <TableHead className=" text-white  truncate">Due Amount</TableHead>
            <TableHead className="text-center text-white  truncate">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableResponseHandler
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
            isFound={isFound}
            column={9}
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
                <TableCell>{item?.customer.customerName || "N/A"}</TableCell>
                <TableCell>{item?.customer.customerPhone || "N/A"}</TableCell>
                <TableCell>{item?.totalQuantity}</TableCell>
                <TableCell>৳ {item?.totalPrice}</TableCell>
                <TableCell>৳ {item?.totalPaid}</TableCell>
                <TableCell>৳ {item?.totalDue}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button type="button" className="text-blue-500">
                      <PrinterIcon className="w-5 h-5" />
                    </button>
                    {/* <button type="button" className="text-red-100">
                      <TrashIcon className="w-5 h-5" />
                    </button> */}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableResponseHandler>
        </TableBody>
      </Table>
      <div className="py-4">{pagination}</div>
    </>
  );
}

export default SaleTable;
