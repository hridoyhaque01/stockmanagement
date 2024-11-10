import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import GrainTable from "@/components/tables/GrainTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetGrainsQuery } from "@/store/modules/grains/api";
import { useSelector } from "react-redux";

function Grainss() {
  const { isLoading, isError, error, refetch } = useGetGrainsQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;

  const { grains } = useSelector((state: RootState) => state.grains);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Grains"
        quantity={grains?.length}
        path={adminRoutes.addGrain.path}
        pathname="Add Grain"
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <GrainTable
          isLoading={isLoading}
          isError={isError && status !== 404 ? true : false}
          isFound={grains?.length > 0}
          isNotFound={grains?.length === 0}
          refetch={refetch}
          data={grains}
        />
      </div>
    </div>
  );
}

export default Grainss;
