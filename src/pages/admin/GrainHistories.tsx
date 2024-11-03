import PageNavigate from "@/components/shared/PageNavigate";
import GrainHistoryTable from "@/components/tables/GrainHistoryTable";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function GrainHistories() {
  const { grainHistories } = useSelector((state: RootState) => state.grains);

  return (
    <div className="h-full p-6 flex flex-col overflow-auto">
      <PageNavigate title="Grain Histories" quantity={grainHistories?.length} />
      <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden flex flex-col">
        <GrainHistoryTable data={grainHistories} />
      </div>
    </div>
  );
}

export default GrainHistories;
