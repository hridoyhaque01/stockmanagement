import PageNavigate from "@/components/shared/PageNavigate";
import GrainHistoryTable from "@/components/tables/GrainHistoryTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetGrainHistoriesQuery } from "@/store/modules/grains/api";
import { useSelector } from "react-redux";

function GrainHistories() {
  const { isLoading, isError, error, refetch } =
    useGetGrainHistoriesQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;

  const { grainHistories } = useSelector((state: RootState) => state.grains);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate title="Grain Histories" quantity={grainHistories?.length} />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <GrainHistoryTable
          isLoading={isLoading}
          isError={isError && status !== 404 ? true : false}
          isFound={grainHistories?.length > 0}
          isNotFound={grainHistories?.length === 0}
          refetch={refetch}
          data={grainHistories}
        />
      </div>
    </div>
  );
}

export default GrainHistories;
