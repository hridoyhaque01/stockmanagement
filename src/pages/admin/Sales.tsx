import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SaleTable from "@/components/tables/SaleTable";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function Grains() {
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
        <SaleTable data={sales} />
      </div>
    </div>
  );
}

export default Grains;
