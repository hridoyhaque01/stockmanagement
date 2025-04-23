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
import { useGetCustomersQuery } from "@/store/modules/customers/api";
import { Customer } from "@/store/modules/customers/types";
import { useSelector } from "react-redux";

export default function CustomerSearch({
  customer,
  setCustomer,
}: {
  customer: Customer | undefined;
  setCustomer: React.Dispatch<React.SetStateAction<Customer | undefined>>;
}) {
  const { isLoading, isError, error, refetch } = useGetCustomersQuery(null);
  const status = isFetchBaseQueryError(error) ? error.status : null;

  const { customers } = useSelector((state: RootState) => state.customers);
  const [open, setOpen] = React.useState(false);

  return (
    <FormInputHelper
      isLoading={isLoading}
      isError={isError && status !== 404 ? true : false}
      refetch={refetch}
      isFound={customers?.length > 0}
      isNotFound={customers?.length === 0}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="combobox"
            size="combobox"
            aria-expanded={open}
            className="justify-between font-normal"
          >
            {customer?.customerPhone
              ? customer?.customerPhone
              : "Select Customer"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search Customer..." />
            <CommandList>
              <CommandEmpty>No customers found.</CommandEmpty>
              <CommandGroup>
                {customers?.map((item) => (
                  <CommandItem
                    key={item?.id}
                    onSelect={() => {
                      setCustomer(
                        item?.customerPhone == customer?.customerPhone
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
                        customer?.customerPhone === item?.customerPhone
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item?.customerPhone}
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
