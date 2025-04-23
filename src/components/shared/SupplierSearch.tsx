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
import { useGetSuppliersQuery } from "@/store/modules/suppliers/api";
import { Supplier } from "@/store/modules/suppliers/types";
import { useSelector } from "react-redux";

export default function SupplierSearch({
  supplier,
  setSupplier,
}: {
  supplier: Supplier | undefined;
  setSupplier: React.Dispatch<React.SetStateAction<Supplier | undefined>>;
}) {
  const { isLoading, isError, error, refetch } = useGetSuppliersQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;
  const { suppliers } = useSelector((state: RootState) => state.suppliers);
  const [open, setOpen] = React.useState(false);

  return (
    <FormInputHelper
      isLoading={isLoading}
      isError={isError && status !== 404 ? true : false}
      refetch={refetch}
      isFound={suppliers?.length > 0}
      isNotFound={suppliers?.length === 0}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="combobox"
            size="combobox"
            aria-expanded={open}
            className="justify-between font-normal"
          >
            {supplier?.supplierPhone
              ? supplier?.supplierPhone
              : "Select Supplier"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search Supplier..." />
            <CommandList>
              <CommandEmpty>No suppliers found.</CommandEmpty>
              <CommandGroup>
                {suppliers?.map((item) => (
                  <CommandItem
                    key={item?.id}
                    onSelect={() => {
                      setSupplier(
                        item?.supplierPhone == supplier?.supplierPhone
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
                        supplier?.supplierPhone === item?.supplierPhone
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item?.supplierPhone}
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
