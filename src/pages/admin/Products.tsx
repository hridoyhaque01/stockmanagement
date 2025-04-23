import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import ProductTable from "@/components/tables/ProductTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetProductsQuery } from "@/store/modules/products/api";
import { Product as ProductType } from "@/store/modules/products/types";
import { useSelector } from "react-redux";

function Products() {
  const { isLoading, isError, error, refetch } = useGetProductsQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { products } = useSelector((state: RootState) => state.products);
  const { searchValue } = useSelector((state: RootState) => state.common);
  const filterBySearch = (item: ProductType) => {
    if (searchValue && searchValue?.trim()?.length > 0) {
      return item?.productId?.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  };
  let data = products?.filter(filterBySearch);
  return (
    <div className="h-full p-4 sm:p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Products"
        quantity={products?.length}
        path={adminRoutes.addProduct.path}
        pathname="Add Product"
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <ProductTable
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

export default Products;
