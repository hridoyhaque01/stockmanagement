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
    <div className={cn("w-full flex flex-col gap-2", wrapper)}>
      {label && (
        <span className={cn("label whitespace-nowrap", labelClass)}>
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
