import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import ProductTable from "@/components/tables/ProductTable";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function Products() {
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
        <ProductTable data={products} />
      </div>
    </div>
  );
}

export default Products;
