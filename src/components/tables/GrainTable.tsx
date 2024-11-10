import { adminRoutes } from "@/common/constants";
import { GrainTableProps } from "@/common/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { Grain } from "@/store/modules/grains/types";
import { ClipboardList, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TableResponseHandler } from "./TableHandler";

function GrainTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: GrainTableProps) {
  const { pagination, currentRows } = usePagination({ data: data });
  const navigate = useNavigate();

  const handleHistoryNavigation = (item: Grain) => {
    navigate(`${adminRoutes.grainHistory.routePath}/${item?.id}/grain-history`);
  };
  return (
    <>
      <Table className="">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-green-400 hover:bg-green-400">
            <TableHead className="w-[150px] text-white  truncate">
              Product Id
            </TableHead>
            <TableHead className="text-white  truncate">Product Name</TableHead>
            <TableHead className="text-white  truncate">Quantity</TableHead>
            <TableHead className="text-white  truncate">Price</TableHead>
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
            column={8}
            isNotFound={isNotFound}
          >
            {currentRows?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium">
                  {item?.product?.productId}
                </TableCell>
                <TableCell>{item?.product?.productName}</TableCell>
                <TableCell>{item?.quantity}</TableCell>
                <TableCell>৳ {item?.price}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      className="text-blue-500"
                      onClick={() => handleHistoryNavigation(item)}
                    >
                      <ClipboardList className="w-5 h-5 " />
                    </button>
                    <button type="button" className="text-red-100">
                      <TrashIcon className="w-5 h-5 " />
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

export default GrainTable;
