"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { FormInputHelper } from "@/pages/admin/forms/FormHandler";
import { RootState } from "@/store";
import { isFetchBaseQueryError } from "@/store/modules/api/apiSlice";
import { useGetGrainsQuery } from "@/store/modules/grains/api";
import { Grain } from "@/store/modules/grains/types";
import { SaleOrder } from "@/store/modules/sales/types";
import { useSelector } from "react-redux";

export default function GrainSearch({
  grain,
  setGrain,
  defaultItem,
}: {
  grain: Grain | undefined;
  defaultItem?: SaleOrder | undefined;
  setGrain: React.Dispatch<React.SetStateAction<Grain | undefined>>;
}) {
  const { isLoading, isError, error, refetch } = useGetGrainsQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { grains } = useSelector((state: RootState) => state.grains);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (defaultItem?.grainId) {
      const grain = grains?.find((grain) => grain.id === defaultItem?.grainId);
      if (grain?.id) {
        setGrain(grain);
      }
    }
  }, [defaultItem]);

  return (
    <FormInputHelper
      isLoading={isLoading}
      isError={isError && status !== 404 ? true : false}
      refetch={refetch}
      isFound={grains?.length > 0}
      isNotFound={grains?.length === 0}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="combobox"
            size="combobox"
            aria-expanded={open}
            className="justify-between font-normal"
          >
            {grain?.product?.productId
              ? grain?.product?.productId
              : "Select grain"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search Product..." />
            <CommandList>
              <CommandEmpty>No grains found.</CommandEmpty>
              <CommandGroup>
                {grains?.map((item) => (
                  <CommandItem
                    key={item?.product?.productId}
                    onSelect={() => {
                      setGrain(
                        item?.product?.productId == grain?.product?.productId
                          ? undefined
                          : item
                      );
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        grain?.product?.productId === item?.product?.productId
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item?.product?.productId}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FormInputHelper>
  );
}
