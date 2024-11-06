import { adminRoutes, getTableIndex } from "@/common/constants";
import { CustomerTableProps } from "@/common/types";
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
import { useAddCustomerPaymentMutation } from "@/store/modules/customers/api";
import { sortCustomers } from "@/store/modules/customers/slice";
import { Customer } from "@/store/modules/customers/types";
import {
  ArrowDownUpIcon,
  ClipboardList,
  HandCoinsIcon,
  PenBoxIcon,
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomerPaymentModal from "../modals/CustomerPaymentModal";
import RequestLoader from "../shared/RequestLoader";
import { TableResponseHandler } from "./TableHandler";

function CustomersTable({
  data = [],
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  refetch = () => {},
}: CustomerTableProps) {
  const { errorNotify, infoNotify } = useToastify();
  const navigate = useNavigate();
  const { pagination, currentRows, currentPage } = usePagination({
    data: data,
  });
  const handleUpdateNavigation = (item: Customer) => {
    navigate(adminRoutes.updateCustomer.path, { state: item });
  };
  const [addCustomerPayment, { isLoading: isLoadingPayment }] =
    useAddCustomerPaymentMutation();
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<null | Customer>(
    null
  );

  const dispatch = useDispatch();
  const [type, setType] = useState("asc");
  const toggleSort = () => {
    if (type === "asc") {
      setType("desc");
      dispatch(sortCustomers("desc"));
    } else {
      setType("asc");
      dispatch(sortCustomers("asc"));
    }
  };

  const handleHistoryNavigation = (item: Customer) => {
    navigate(`${adminRoutes.customerOrders.routePath}/${item?.id}`, {
      state: item,
    });
  };

  const handleUpdatePayment = (item: FormData) => {
    addCustomerPayment({ data: item, id: selectedCustomer?.id || "" })
      .unwrap()
      .then((res) => {
        infoNotify(res?.message);
      })
      .catch((error) => {
        errorNotify(error?.data?.message);
      });
  };

  const handleSelectItem = (item: Customer) => {
    setSelectedCustomer(item);
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
            <TableHead className="w-[150px] text-white truncate truncate">
              Customer Name
            </TableHead>
            <TableHead className="text-white truncate truncate">
              Customer Email
            </TableHead>
            <TableHead className="text-white truncate truncate">
              Customer Phone
            </TableHead>
            <TableHead className="text-white truncate truncate">
              Customer Address
            </TableHead>
            <TableHead className=" text-white truncate truncate">Total Paid</TableHead>
            <TableHead className=" text-white truncate truncate">Total Due</TableHead>
            <TableHead className=" text-white truncate truncate">
              Total Balance
            </TableHead>
            <TableHead className="text-center text-white truncate truncate">
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
                <TableCell>{item?.customerName || "N/A"}</TableCell>
                <TableCell>{item?.customerEmail || "N/A"}</TableCell>
                <TableCell>{item?.customerPhone || "N/A"}</TableCell>
                <TableCell>{item?.customerAddress || "N/A"}</TableCell>
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
      <CustomerPaymentModal
        open={open}
        setOpen={setOpen}
        dueAmount={selectedCustomer?.totalDue || 0}
        paymentHandler={handleUpdatePayment}
      />
      {isLoadingPayment && <RequestLoader />}
    </>
  );
}

export default CustomersTable;
