import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import ProductHistoriesTable from "@/components/tables/ProductHistoriesTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetProductSuppliesQuery } from "@/store/modules/supplies/api";
import { Supplies } from "@/store/modules/supplies/types";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

function ProductHistories() {
  const { productId } = useParams();
  const { state } = useLocation();
  const { isLoading, isError, error, refetch } = useGetProductSuppliesQuery(
    productId,
    {
      skip: !productId,
<<<<<<< HEAD
      refetchOnMountOrArgChange: true,
=======
>>>>>>> 5543df6 (fix tables and add some api's)
    }
  );
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { productSupplies } = useSelector((state: RootState) => state.supplies);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: Supplies) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.supplier?.supplierName
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };

  let data = productSupplies?.filter(filterBySearch);

  return (
    <div className="h-full p-4 sm:p-6 flex flex-col overflow-auto">
      <PageNavigate
        prevPath={adminRoutes.products.path}
        title={`${state?.productName} Supplies`}
        quantity={productSupplies?.length}
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <ProductHistoriesTable
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

export default ProductHistories;
