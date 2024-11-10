import { GrainHistoryTableProps } from "@/common/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { TrashIcon } from "lucide-react";
import { TableResponseHandler } from "./TableHandler";

function GrainHistoryTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: GrainHistoryTableProps) {
  const { pagination, currentRows } = usePagination({ data: data });
  return (
    <>
      <Table className="">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-green-400 hover:bg-green-400">
            <TableHead className="w-[150px] truncate text-white">
              Product Id
            </TableHead>
            <TableHead className="text-white truncate">Product Name</TableHead>
            <TableHead className="text-white truncate">
              Product Quantity
            </TableHead>
            <TableHead className="text-white truncate">
              Product Category
            </TableHead>
            <TableHead className="text-white truncate">
              Grain Quantity
            </TableHead>
            <TableHead className="text-white truncate">
              Grain Category
            </TableHead>
            <TableHead className="text-white truncate">Grain Left</TableHead>
            <TableHead className="text-white truncate">Price</TableHead>
            <TableHead className="text-center text-white">Action</TableHead>
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
            {currentRows?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium whitespace-nowrap">
                  {item?.product.productId}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.product?.productName}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.productQuantity}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.productCategory}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.quantity}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.grainCategory}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.quantityLeft}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  ৳ {item?.price}
                </TableCell>
                <TableCell className="text-center  whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <button type="button" className="text-red-100">
                      <TrashIcon className="w-5 h-5" />
                    </button>
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

export default GrainHistoryTable;
