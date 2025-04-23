import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function DatePicker({
  wrapper = "",
  label = "",
  labelClass = "",
  date,
  setDate,
}: {
  wrapper?: string;
  label?: string;
  labelClass?: string;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <div className={cn("w-full flex flex-col gap-2", wrapper)}>
      {label && (
        <span
          className={cn(
            "label whitespace-nowrap",
            labelClass
          )}
        >
          {label}
        </span>
      )}
      <Popover>
        <PopoverTrigger className="" asChild>
          <Button
            variant="datepicker"
            size="datepicker"
            className={cn("justify-start text-left font-normal")}
          >
            <CalendarIcon />
            <span className="flex-1">
              {date ? format(date, "PPP") : "Pick a date"}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
