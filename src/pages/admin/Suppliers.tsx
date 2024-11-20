import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SupplierTable from "@/components/tables/SupplierTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetSuppliersQuery } from "@/store/modules/suppliers/api";
import { Supplier } from "@/store/modules/suppliers/types";
import { useSelector } from "react-redux";

function Suppliers() {
  const { isLoading, isError, error, refetch } = useGetSuppliersQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { suppliers } = useSelector((state: RootState) => state.suppliers);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: Supplier) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.supplierPhone
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };
  let data = suppliers?.filter(filterBySearch);
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
          isFound={data?.length > 0}
          isNotFound={data?.length === 0}
          refetch={refetch}
          data={data}
        />
      </div>
    </div>
  );
}

export default Suppliers;
