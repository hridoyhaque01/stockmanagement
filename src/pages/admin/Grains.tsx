import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import GrainTable from "@/components/tables/GrainTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetGrainsQuery } from "@/store/modules/grains/api";
import { Grain } from "@/store/modules/grains/types";
import { useSelector } from "react-redux";

function Grainss() {
  const { isLoading, isError, error, refetch } = useGetGrainsQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { grains } = useSelector((state: RootState) => state.grains);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: Grain) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.product.productId
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };
  let data = grains?.filter(filterBySearch);
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
          isFound={data?.length > 0}
          isNotFound={data?.length === 0}
          refetch={refetch}
          data={data}
        />
      </div>
    </div>
  );
}

export default Grainss;
