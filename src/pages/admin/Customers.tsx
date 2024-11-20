import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import CustomersTable from "@/components/tables/CustomerTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetCustomersQuery } from "@/store/modules/customers/api";
import { Customer } from "@/store/modules/customers/types";
import { useSelector } from "react-redux";

function Customers() {
  const { isLoading, isError, error, refetch } = useGetCustomersQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;

  const { customers } = useSelector((state: RootState) => state.customers);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: Customer) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.customerPhone
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };
  let data = customers?.filter(filterBySearch);
  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Customers"
        quantity={customers?.length}
        path={adminRoutes.addCustomer.path}
        pathname="Add Customer"
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <CustomersTable
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

export default Customers;
