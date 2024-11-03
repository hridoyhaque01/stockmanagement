import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { Sale } from "@/store/modules/sales/types";
import { PrinterIcon, TrashIcon } from "lucide-react";

function SaleTable({ data = [] }: { data: Sale[] }) {
  const { pagination, currentRows } = usePagination({ data: data });

  return (
    <>
      <Table className="">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-green-400 hover:bg-green-400">
            <TableHead className="w-[150px] text-white">
              Customer Name
            </TableHead>
            <TableHead className="text-white">Customer Phone</TableHead>
            <TableHead className="text-white">Quantity</TableHead>
            <TableHead className="text-white">Total Amount</TableHead>
            <TableHead className=" text-white">Paid Amount</TableHead>
            <TableHead className=" text-white">Due Amount</TableHead>
            <TableHead className="text-center text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows?.map((item) => (
            <TableRow key={item?.id}>
              <TableCell>{item?.customer.customerName}</TableCell>
              <TableCell>{item?.customer.customerPhone}</TableCell>
              <TableCell>{item?.totalQuantity}</TableCell>
              <TableCell>৳ {item?.totalPrice}</TableCell>
              <TableCell>৳ {item?.totalPaid}</TableCell>
              <TableCell>৳ {item?.totalDue}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-3">
                  <button type="button" className="text-blue-500">
                    <PrinterIcon className="w-5 h-5" />
                  </button>
                  <button type="button" className="text-red-100">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="py-4">{pagination}</div>
    </>
  );
}

export default SaleTable;
