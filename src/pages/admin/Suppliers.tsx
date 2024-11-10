import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SupplierTable from "@/components/tables/SupplierTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetSuppliersQuery } from "@/store/modules/suppliers/api";
import { useSelector } from "react-redux";

function Suppliers() {
  const { isLoading, isError, error, refetch } = useGetSuppliersQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { suppliers } = useSelector((state: RootState) => state.suppliers);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Suppliers"
        quantity={suppliers?.length}
        path={adminRoutes.addSupplier.path}
        pathname="Add Supplier"
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <SupplierTable
          isLoading={isLoading}
          isError={isError && status !== 404 ? true : false}
          isFound={suppliers?.length > 0}
          isNotFound={suppliers?.length === 0}
          refetch={refetch}
          data={suppliers}
        />
      </div>
    </div>
  );
}

export default Suppliers;
