import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import SupplierTable from "@/components/tables/SupplierTable";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function Suppliers() {
  const { suppliers } = useSelector((state: RootState) => state.suppliers);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate
        title="Suppliers"
        quantity={suppliers?.length}
        path={adminRoutes.addSupplier.path}
        pathname="Add Supplier"
      />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <SupplierTable data={suppliers} />
      </div>
    </div>
  );
}

export default Suppliers;
