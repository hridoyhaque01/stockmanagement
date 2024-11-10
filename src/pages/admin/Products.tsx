import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import ProductTable from "@/components/tables/ProductTable";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetProductsQuery } from "@/store/modules/products/api";
import { useSelector } from "react-redux";

function Products() {
  const { isLoading, isError, error, refetch } = useGetProductsQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { products } = useSelector((state: RootState) => state.products);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
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
          isFound={products?.length > 0}
          isNotFound={products?.length === 0}
          refetch={refetch}
          data={products}
        />
      </div>
    </div>
  );
}

export default Products;
