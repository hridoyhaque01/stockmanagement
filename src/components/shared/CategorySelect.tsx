import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function CategorySelect({
  wrapper = "",
  label = "Category : ",
  labelClass = "",
  ...props
}: {
  wrapper?: string;
  label?: string;
  labelClass?: string;
  [key: string]: any;
}) {
  return (
    <div className={cn("w-full flex items-center gap-2 sm:gap-4", wrapper)}>
      {label && (
        <span
          className={cn(
            "label whitespace-nowrap sm:min-w-[110px] sm:text-right",
            labelClass
          )}
        >
          {label}
        </span>
      )}

      <Select {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kg">Kg</SelectItem>
          <SelectItem value="mon">Mon</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategorySelect;
