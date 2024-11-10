import { adminRoutes } from "@/common/constants";
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
import { Product } from "@/store/modules/products/types";
import { PenBoxIcon } from "lucide-react";
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
  const { pagination, currentRows } = usePagination({ data: data });
  const handleUpdateNavigation = (item: Product) => {
    navigate(adminRoutes.updateProduct.path, { state: item });
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
          >
            {currentRows?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium">{item?.productId}</TableCell>
                <TableCell>{item?.productName}</TableCell>
                <TableCell>{item?.quantity}</TableCell>
                <TableCell>৳ {item?.totalPrice}</TableCell>
                <TableCell>৳ {item?.avaragePrice}</TableCell>
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
