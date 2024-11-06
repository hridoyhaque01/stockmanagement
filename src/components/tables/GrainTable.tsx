import { adminRoutes, getTableIndex } from "@/common/constants";
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
import { sortGrains } from "@/store/modules/grains/slice";
import { Grain } from "@/store/modules/grains/types";
import { ArrowDownUpIcon, ClipboardList } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortGrains("desc"));
    } else {
      setType("asc");
      dispatch(sortGrains("asc"));
    }
  };
  const handleHistoryNavigation = (item: Grain) => {
    navigate(`${adminRoutes.grainHistory.routePath}/${item?.id}/grain-history`);
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
            <TableHead className="w-[150px] text-white  truncate  truncate">
              Product Id
            </TableHead>
            <TableHead className="text-white  truncate  truncate">Product Name</TableHead>
            <TableHead className="text-white  truncate  truncate">Quantity</TableHead>
            <TableHead className="text-white  truncate  truncate">Price</TableHead>
            <TableHead className="text-center text-white  truncate  truncate">
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
            column={7}
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
                  {new Date(item?.timestamp * 1000).toDateString()}
                </TableCell>
                <TableCell className="font-medium">
                  {item?.product?.productId || "N/A"}
                </TableCell>
                <TableCell>{item?.product?.productName || "N/A"}</TableCell>
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
