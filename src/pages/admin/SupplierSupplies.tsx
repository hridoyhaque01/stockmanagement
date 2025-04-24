import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SupplierSuppliesTable from "@/components/tables/SupplierSuppliesTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetSupplierSuppliesQuery } from "@/store/modules/supplies/api";
import { Supplies as SuppliesType } from "@/store/modules/supplies/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

function SupplierSupplies() {
  const [type, setType] = useState("purchase");
  const { supplierId } = useParams();
  const { state } = useLocation();
  const { isLoading, isError, error, refetch } = useGetSupplierSuppliesQuery(
    supplierId,
    {
      skip: !supplierId,
<<<<<<< HEAD
      refetchOnMountOrArgChange: true,
=======
>>>>>>> 5543df6 (fix tables and add some api's)
    }
  );
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { supplierSupplies } = useSelector(
    (state: RootState) => state.supplies
  );
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
  let data = supplierSupplies?.filter(filterBySearch)?.filter(filterByType);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        prevPath={adminRoutes.suppliers.path}
        title={`${state?.supplierName} Supplies`}
        quantity={supplierSupplies?.length}
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
        <SupplierSuppliesTable
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

export default SupplierSupplies;
