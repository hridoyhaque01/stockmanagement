import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SuppliesTable from "@/components/tables/SuppliesTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetSuppliesQuery } from "@/store/modules/supplies/api";
import { useSelector } from "react-redux";

function Supplies() {
  const { isLoading, isError, error, refetch } = useGetSuppliesQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { supplies } = useSelector((state: RootState) => state.supplies);

  

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Supplies"
        quantity={supplies?.length}
        path={adminRoutes.addSupplies.path}
        pathname="Add Supplies"
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <SuppliesTable
          isLoading={isLoading}
          isError={isError && status !== 404 ? true : false}
          isFound={supplies?.length > 0}
          isNotFound={supplies?.length === 0}
          refetch={refetch}
          data={supplies}
        />
      </div>
    </div>
  );
}

export default Supplies;
