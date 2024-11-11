import { removeOrderGrain } from "@/store/modules/sales/slice";
import { SaleOrder } from "@/store/modules/sales/types";
import { PenIcon, TrashIcon } from "lucide-react";
import { useDispatch } from "react-redux";

function GrainCard({
  item,
  handler,
}: {
  item: SaleOrder;
  handler: (value: SaleOrder) => void;
}) {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-col gap-2 p-4 bg-neutral-100 hover:bg-neutral-200/70 duration-200 rounded-xl cursor-pointer">
      <div className="w-full flex items-center justify-between gap-2">
        <span className="text-sm text-black-600">Grain Name : </span>
        <span className="text-sm text-black-900">{item?.productName}</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">quantity : </span>
        <span className="text-sm text-black-900">{item?.quantity}</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">price : </span>
        <span className="text-sm text-black-900">{item?.price}</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 ">
        <span className="text-sm text-black-600">Selling Price : </span>
        <span className="text-sm text-black-900">{item?.sellingPrice}</span>
      </div>
      <div className="w-full flex items-center justify-between gap-2 pb-3">
        <span className="text-sm text-black-600">category : </span>
        <span className="text-sm text-black-900">{item?.category}</span>
      </div>
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-neutral-200">
        <span className="text-sm text-black-900 font-medium">Action : </span>

        <div className="flex items-center gap-3">
          <button type="button" className="" onClick={() => handler(item)}>
            <PenIcon className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="text-red-300"
            onClick={() => dispatch(removeOrderGrain(item))}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrainCard;
