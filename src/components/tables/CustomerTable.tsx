import { adminRoutes } from "@/common/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { Customer } from "@/store/modules/customers/types";
import { PenBoxIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CustomersTable({ data = [] }: { data: Customer[] }) {
  const navigate = useNavigate();
  const { pagination, currentRows } = usePagination({ data: data });
  const handleUpdateNavigation = (item: Customer) => {
    navigate(adminRoutes.updateCustomer.path, { state: item });
  };
  return (
    <>
      <Table className="">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-green-400 hover:bg-green-400">
            <TableHead className="w-[150px] text-white">
              Customer Name
            </TableHead>
            <TableHead className="text-white">Customer Email</TableHead>
            <TableHead className="text-white">Customer Phone</TableHead>
            <TableHead className="text-white">Customer Address</TableHead>
            <TableHead className=" text-white">Total Paid</TableHead>
            <TableHead className=" text-white">Total Due</TableHead>
            <TableHead className=" text-white">Total Balance</TableHead>
            <TableHead className="text-center text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows?.map((item) => (
            <TableRow key={item?.id}>
              <TableCell>{item?.customerName}</TableCell>
              <TableCell>{item?.customerEmail}</TableCell>
              <TableCell>{item?.customerPhone}</TableCell>
              <TableCell>{item?.customerAddress}</TableCell>
              <TableCell>৳ {item?.totalPaid}</TableCell>
              <TableCell>৳ {item?.totalDue}</TableCell>
              <TableCell>৳ {item?.totalBalance}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    className="text-blue-500"
                    onClick={() => handleUpdateNavigation(item)}
                  >
                    <PenBoxIcon className="w-5 h-5" />
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

export default CustomersTable;
