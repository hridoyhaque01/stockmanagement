import { getTableIndex } from "@/common/constants";
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
import { sortGrainHistories } from "@/store/modules/grains/slice";
import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TableResponseHandler } from "./TableHandler";

function GrainHistoryTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: GrainHistoryTableProps) {
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortGrainHistories("desc"));
    } else {
      setType("asc");
      dispatch(sortGrainHistories("asc"));
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
            {/* <TableHead className="text-center text-white">Action</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableResponseHandler
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
            isFound={isFound}
            column={10}
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
                <TableCell className="font-medium whitespace-nowrap">
                  {item?.product.productId || "N/A"}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.product?.productName || "N/A"}
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
                {/* <TableCell className="text-center  whitespace-nowrap">
                  <div className="flex items-center justify-center gap-3">
                    <button type="button" className="text-red-100">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </TableCell> */}
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
