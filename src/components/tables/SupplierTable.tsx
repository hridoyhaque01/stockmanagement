import { adminRoutes, getTableIndex } from "@/common/constants";
import { SupplierTableProps } from "@/common/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePagination from "@/hooks/usePagination";
import useToastify from "@/hooks/useToastify";
import { useAddSupplierPaymentMutation } from "@/store/modules/suppliers/api";
import { sortSuppliers } from "@/store/modules/suppliers/slice";
import { Supplier } from "@/store/modules/suppliers/types";
import {
  ArrowDownUpIcon,
  ClipboardList,
  HandCoinsIcon,
  PenBoxIcon,
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SupplierPaymentModal from "../modals/SupplierPaymentModal";
import RequestLoader from "../shared/RequestLoader";
import { TableResponseHandler } from "./TableHandler";

function SupplierTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: SupplierTableProps) {
  const { infoNotify, errorNotify } = useToastify();
  const [addSupplierPayment, { isLoading: isLoadingPayment }] =
    useAddSupplierPaymentMutation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortSuppliers("desc"));
    } else {
      setType("asc");
      dispatch(sortSuppliers("asc"));
    }
  };

  const handleUpdateNavigation = (item: Supplier) => {
    navigate(adminRoutes.updateSupplier.path, { state: item });
  };
  const [selectedSupplier, setSelectedSupplier] = useState<null | Supplier>(
    null
  );

  const handleHistoryNavigation = (item: Supplier) => {
    navigate(`${adminRoutes.supplierSupplies.routePath}/${item?.id}`, {
      state: item,
    });
  };

  const handleUpdatePayment = (item: FormData) => {
    addSupplierPayment({ data: item, id: selectedSupplier?.id || "" })
      .unwrap()
      .then((res) => {
        infoNotify(res?.message);
      })
      .catch((error) => {
        errorNotify(error?.data?.message);
      });
  };

  const handleSelectItem = (item: Supplier) => {
    setSelectedSupplier(item);
    setOpen(true);
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
              Supplier Name
            </TableHead>
            <TableHead className="text-white  truncate">
              Supplier Email
            </TableHead>
            <TableHead className="text-white  truncate">
              Supplier Phone
            </TableHead>
            <TableHead className="text-white  truncate">
              Supplier Address
            </TableHead>
            <TableHead className="text-white  truncate">Total Paid</TableHead>
            <TableHead className="text-white  truncate">Total Due</TableHead>
            <TableHead className=" text-white  truncate">
              Total Balance
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
                  {new Date(item?.timestamp * 1000).toDateString()}
                </TableCell>
                <TableCell className="font-medium">
                  {item?.supplierName || "N/A"}
                </TableCell>
                <TableCell>{item?.supplierEmail || "N/A"}</TableCell>
                <TableCell>{item?.supplierPhone || "N/A"}</TableCell>
                <TableCell className="truncate max-w-[200px]">
                  {item?.supplierAddress || "N/A"}
                </TableCell>
                <TableCell>৳ {item?.totalPaid}</TableCell>
                <TableCell>৳ {item?.totalDue}</TableCell>
                <TableCell>৳ {item?.totalBalance}</TableCell>
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
                      className="text-green-600"
                      onClick={() => handleSelectItem(item)}
                    >
                      <HandCoinsIcon className="w-6 h-6" />
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
      <SupplierPaymentModal
        open={open}
        setOpen={setOpen}
        dueAmount={selectedSupplier?.totalDue}
        paymentHandler={handleUpdatePayment}
      />
      {isLoadingPayment && <RequestLoader />}
    </>
  );
}

export default SupplierTable;
