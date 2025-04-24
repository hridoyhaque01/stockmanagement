import { getTableIndex } from "@/common/constants";
import { SuppliesTableProps } from "@/common/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
<<<<<<< HEAD
import useToastify from "@/hooks/useToastify";
import { useRemoveSupplyMutation } from "@/store/modules/supplies/api";
import { sortSupplies } from "@/store/modules/supplies/slice";
import { Supplies } from "@/store/modules/supplies/types";
import { ArrowDownUpIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ConfirmationModal from "../modals/ConfirmationModal";
import RequestLoader from "../shared/RequestLoader";
=======
import { sortSupplies } from "@/store/modules/supplies/slice";
import { ArrowDownUpIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
>>>>>>> 5543df6 (fix tables and add some api's)
import { TableResponseHandler } from "./TableHandler";

function SuppliesTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: SuppliesTableProps) {
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
<<<<<<< HEAD
  const { infoNotify, errorNotify } = useToastify();
  const [removeSupply, { isLoading: isDeleting }] = useRemoveSupplyMutation();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const [supplies, setSupplies] = useState<Supplies | null>(null);
=======
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
>>>>>>> 5543df6 (fix tables and add some api's)
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortSupplies("desc"));
    } else {
      setType("asc");
      dispatch(sortSupplies("asc"));
    }
  };
<<<<<<< HEAD

  const selectSupplies = (supplies: Supplies) => {
    setSupplies(supplies);
    setOpen(true);
  };

  const handleDelete = () => {
    removeSupply(supplies?.id)
      .unwrap()
      .then((res) => {
        infoNotify(res?.message);
      })
      .catch((error) => {
        errorNotify(error?.data?.message);
      });
    setOpen(false);
  };

=======
>>>>>>> 5543df6 (fix tables and add some api's)
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
          <TableResponseHandler
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
            isFound={isFound}
            column={11}
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
                <TableCell className="font-medium">
                  {item?.product?.productId || "N/A"}
                </TableCell>
                <TableCell>{item?.product?.productName || "N/A"}</TableCell>
                <TableCell>{item?.supplier?.supplierName || "N/A"}</TableCell>
                <TableCell>{item?.supplier?.supplierPhone || "N/A"}</TableCell>
                <TableCell>{item?.quantity}</TableCell>
                <TableCell>৳ {item?.price}</TableCell>
                <TableCell>৳ {item?.paidAmount}</TableCell>
                <TableCell>৳ {item?.dueAmount}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      className="text-blue-500"
                      onClick={() => selectSupplies(item)}
                    >
                      <TrashIcon className="w-5 h-5 text-red-100" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableResponseHandler>
        </TableBody>
      </Table>
      <div className="py-4">{pagination}</div>
      <ConfirmationModal
        handler={handleDelete}
        open={open}
        setOpen={setOpen}
        description="Are you sure you want to delete this product?"
      />
      {isDeleting && <RequestLoader />}
    </>
  );
}

export default SuppliesTable;
