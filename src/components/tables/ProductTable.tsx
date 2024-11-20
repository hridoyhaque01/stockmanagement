import { adminRoutes, getTableIndex } from "@/common/constants";
import { ProductTableProps } from "@/common/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import { sortProducts } from "@/store/modules/products/slice";
import { Product } from "@/store/modules/products/types";
import { ArrowDownUpIcon, ClipboardList, PenBoxIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableResponseHandler } from "./TableHandler";

function ProductTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: ProductTableProps) {
  const navigate = useNavigate();
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
  const handleUpdateNavigation = (item: Product) => {
    navigate(adminRoutes.updateProduct.path, { state: item });
  };
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortProducts("desc"));
    } else {
      setType("asc");
      dispatch(sortProducts("asc"));
    }
  };
  const handleHistoryNavigation = (item: Product) => {
    navigate(`${adminRoutes.productHistories.routePath}/${item?.id}`, {
      state: item,
    });
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
              Product Id
            </TableHead>
            <TableHead className="text-white  truncate">Product Name</TableHead>
            <TableHead className="text-white  truncate">Quantity</TableHead>
            <TableHead className="text-white  truncate">Total Price</TableHead>
            <TableHead className=" text-white  truncate">
              Avarage Price
            </TableHead>
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
            isNotFound={isNotFound}
            column={8}
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
                <TableCell className="font-medium">{item?.productId || "N/A"}</TableCell>
                <TableCell>{item?.productName || "N/A"}</TableCell>
                <TableCell>{item?.quantity}</TableCell>
                <TableCell>৳ {item?.totalPrice}</TableCell>
                <TableCell>৳ {item?.avaragePrice}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      className="text-blue-500"
                      onClick={() => handleHistoryNavigation(item)}
                    >
                      <ClipboardList className="w-5 h-5 " />
                    </button>
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
          </TableResponseHandler>
        </TableBody>
      </Table>
      <div className="py-4">{pagination}</div>
    </>
  );
}

export default ProductTable;

// export const useProductTable = ({
//   data = [],
//   isLoading = false,
//   isError = false,
//   isNotFound = false,
//   isFound = false,
//   refetch = () => {},
// }: ProductTableProps) => {
//   return {

//   };
// };
