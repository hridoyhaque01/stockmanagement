import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { Supplies } from "@/store/modules/supplies/types";
import { TrashIcon } from "lucide-react";

function SuppliesTable({ data = [] }: { data: Supplies[] }) {
  const { pagination, currentRows } = usePagination({ data: data });

  return (
    <>
      <Table className="">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-green-400 hover:bg-green-400">
            <TableHead className="w-[150px] text-white truncate">
              Product Id
            </TableHead>
            <TableHead className="text-white truncate">Product Name</TableHead>
            <TableHead className="text-white truncate">Supplier Name</TableHead>
            <TableHead className="text-white truncate">
              Supplier Phone
            </TableHead>
            <TableHead className="text-white truncate">Quantity</TableHead>
            <TableHead className="text-white truncate">Total Price</TableHead>
            <TableHead className=" text-white truncate">Total Paid</TableHead>
            <TableHead className=" text-white truncate">Total Due</TableHead>
            <TableHead className="text-center text-white truncate">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows?.map((item) => (
            <TableRow key={item?.id}>
              <TableCell className="font-medium">
                {item?.product?.productId}
              </TableCell>
              <TableCell>{item?.product?.productName}</TableCell>
              <TableCell>{item?.supplier?.supplierName}</TableCell>
              <TableCell>{item?.supplier?.supplierPhone}</TableCell>
              <TableCell>{item?.quantity}</TableCell>
              <TableCell>৳ {item?.price}</TableCell>
              <TableCell>৳ {item?.paidAmount}</TableCell>
              <TableCell>৳ {item?.dueAmount}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-3">
                  <button type="button" className="text-blue-500">
                    <TrashIcon className="w-5 h-5 text-red-100" />
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

export default SuppliesTable;
