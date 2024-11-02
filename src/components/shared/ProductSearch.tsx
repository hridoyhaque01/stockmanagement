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
import { RootState } from "@/store";
import { Product } from "@/store/modules/products/types";
import { useSelector } from "react-redux";

export default function ProductSearch({
  product,
  setProduct,
}: {
  product: Product | undefined;
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
}) {
  const { products } = useSelector((state: RootState) => state.products);
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="combobox"
          size="combobox"
          aria-expanded={open}
          className="justify-between font-normal"
        >
          {product?.productId ? product?.productId : "Select Product"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search Product..." />
          <CommandList>
            <CommandEmpty>No products found.</CommandEmpty>
            <CommandGroup>
              {products?.map((item) => (
                <CommandItem
                  key={item?.id}
                  onSelect={() => {
                    setProduct(
                      item?.productId == product?.productId ? undefined : item
                    );
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      product?.productId === item?.productId
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {item.productId}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
