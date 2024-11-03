import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import CustomersTable from "@/components/tables/CustomerTable";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function Customers() {
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
        <CustomersTable data={customers} />
      </div>
    </div>
  );
}

export default Customers;
