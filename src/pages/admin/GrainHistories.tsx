import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import GrainHistoryTable from "@/components/tables/GrainHistoryTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetGrainHistoriesQuery } from "@/store/modules/grains/api";
import { GrainHistory } from "@/store/modules/grains/types";
import { useSelector } from "react-redux";

function GrainHistories() {
  const { isLoading, isError, error, refetch } =
    useGetGrainHistoriesQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { grainHistories } = useSelector((state: RootState) => state.grains);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: GrainHistory) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.product?.productId
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };

  let data = grainHistories?.filter(filterBySearch);
  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        prevPath={adminRoutes.grains.path}
        title="Grain Histories"
        quantity={grainHistories?.length}
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <GrainHistoryTable
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

export default GrainHistories;
