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
import { Grain } from "@/store/modules/grains/types";
import { PenBoxIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function GrainTable({ data = [] }: { data: Grain[] }) {
  const navigate = useNavigate();
  const { pagination, currentRows } = usePagination({ data: data });
  const handleUpdateNavigation = (item: Grain) => {
    navigate(adminRoutes.updateProduct.path, { state: item });
  };
  return (
    <>
      <Table className="">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-green-400 hover:bg-green-400">
            <TableHead className="w-[150px] text-white">Product Id</TableHead>
            <TableHead className="text-white">Product Name</TableHead>
            <TableHead className="text-white">Quantity</TableHead>
            <TableHead className="text-white">Price</TableHead>
            <TableHead className="text-center text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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

export default GrainTable;
