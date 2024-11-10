import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SaleTable from "@/components/tables/SaleTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetSalesQuery } from "@/store/modules/sales/api";
import { useSelector } from "react-redux";

function Grains() {
  const { isLoading, isError, error, refetch } = useGetSalesQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { sales } = useSelector((state: RootState) => state.sales);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Sales"
        quantity={sales?.length}
        path={adminRoutes.addSales.path}
        pathname="Add Sale"
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <SaleTable
          isLoading={isLoading}
          isError={isError && status !== 404 ? true : false}
          isFound={sales?.length > 0}
          isNotFound={sales?.length === 0}
          refetch={refetch}
          data={sales}
        />
      </div>
    </div>
  );
}

export default Grains;
