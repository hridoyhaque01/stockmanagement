import { ChartSvg } from "@/common/constants/svgs";
import { ReactNode } from "react";

function DashCard({
  title = "",
  amount = 0,
  icon = null,
  chartClass = "",
  profitClass = "text-green-550",
  profitAmount = "+0%",
  profitText = "",
}: {
  title?: string;
  amount?: number;
  icon?: ReactNode | null;
  chartClass?: string;
  profitClass?: string;
  profitAmount?: string;
  profitText?: string;
}) {
  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm sm:text-base text-black-600">{title}</span>
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-black-800">
            {amount?.toLocaleString()}
          </span>
        </div>
        <div className="w-14 h-14 flex items-center justify-center">{icon}</div>
      </div>
      <div className="flex items-center gap-1 text-sm mt-8 text-black-600">
        <ChartSvg className={chartClass} />
        <span className={profitClass}>{profitAmount}</span>
        <span>{profitText}</span>
      </div>
    </div>
  );
}

export default DashCard;
