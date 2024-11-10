import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import CustomersTable from "@/components/tables/CustomerTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetCustomersQuery } from "@/store/modules/customers/api";
import { useSelector } from "react-redux";

function Customers() {
  const { isLoading, isError, error, refetch } = useGetCustomersQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;

  const { customers } = useSelector((state: RootState) => state.customers);

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
          isFound={customers?.length > 0}
          isNotFound={customers?.length === 0}
          refetch={refetch}
          data={customers}
        />
      </div>
    </div>
  );
}

export default Customers;
