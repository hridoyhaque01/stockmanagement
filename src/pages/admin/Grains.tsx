import { adminRoutes } from "@/common/constants";
import PageNavigate from "@/components/shared/PageNavigate";
import GrainTable from "@/components/tables/GrainTable";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function Grainss() {
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
        <GrainTable data={grains} />
      </div>
    </div>
  );
}

export default Grainss;
