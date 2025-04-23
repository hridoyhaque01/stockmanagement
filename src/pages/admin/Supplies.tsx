import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SuppliesTable from "@/components/tables/SuppliesTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetSuppliesQuery } from "@/store/modules/supplies/api";
import { Supplies as SuppliesType } from "@/store/modules/supplies/types";
import { useState } from "react";
import { useSelector } from "react-redux";

function Supplies() {
  const [type, setType] = useState("purchase");
  const { isLoading, isError, error, refetch } = useGetSuppliesQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { supplies } = useSelector((state: RootState) => state.supplies);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: SuppliesType) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.product?.productId
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };
  const filterByType = (item: SuppliesType) => {
    if (type == "purchase") {
      return item?.type !== "Due Payment";
    } else {
      return item?.type === "Due Payment";
    }
  };
  let data = supplies?.filter(filterBySearch)?.filter(filterByType);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Supplies"
        quantity={supplies?.length}
        path={adminRoutes.addSupplies.path}
        pathname="Add Supplies"
        wrapper="flex-col sm:flex-row items-start sm:items-center"
      >
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-full text-sm sm:text-base py-2 sm:py-2.5 max-w-max min-w-28 sm:min-w-32">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="purchase">Purchase</SelectItem>
            <SelectItem value="payment">Payment</SelectItem>
          </SelectContent>
        </Select>
      </PageNavigate>
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <SuppliesTable
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

export default Supplies;
