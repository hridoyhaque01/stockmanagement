import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SaleTable from "@/components/tables/SaleTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetSalesQuery } from "@/store/modules/sales/api";
import { Sale } from "@/store/modules/sales/types";
import { useState } from "react";
import { useSelector } from "react-redux";

function Sales() {
  const [type, setType] = useState("sales");
  const { isLoading, isError, error, refetch } = useGetSalesQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { sales } = useSelector((state: RootState) => state.sales);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: Sale) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.customer?.customerPhone
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };
  const filterByType = (item: Sale) => {
    if (type == "sales") {
      return item?.type !== "Due Payment";
    } else {
      return item?.type === "Due Payment";
    }
  };
  let data = sales?.filter(filterBySearch)?.filter(filterByType);
  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Sales"
        quantity={sales?.length}
        path={adminRoutes.addSales.path}
        pathname="Add Sale"
      >
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-full text-sm sm:text-base py-2 sm:py-2.5 max-w-max min-w-28 sm:min-w-32">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="payment">Payment</SelectItem>
          </SelectContent>
        </Select>
      </PageNavigate>
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <SaleTable
          isLoading={isLoading}
          isError={isError && status !== 404 ? true : false}
          isFound={data?.length > 0}
          isNotFound={data?.length === 0}
          refetch={refetch}
          data={data}
        />
      </div>
    </div>
  );
}

export default Sales;
