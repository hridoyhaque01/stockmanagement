import useToastify from "@/hooks/useToastify";
import { RootState } from "@/store";
import { Grain } from "@/store/modules/grains/types";
import { addOrderGrain } from "@/store/modules/sales/slice";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategorySelect from "../shared/CategorySelect";
import GrainSearch from "../shared/GrainSearch";
import Input from "../shared/Input";
import NumberInput from "../shared/NumberInput";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function ProductAddModal({
  open = false,
  setOpen = () => {},
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [grain, setGrain] = useState<Grain>();
  const { errorNotify } = useToastify();
  const dispatch = useDispatch();
  const { selectedOrder } = useSelector((state: RootState) => state.sales);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const grainId = grain?.id;
    const quantity = form.quantity.value;
    const sellingPrice = form.sellingPrice.value;
    const category = form.category.value;

    if (!grain?.id) {
      return errorNotify("Grain must be selected");
    }

    if (quantity == 0) {
      return errorNotify("Quantity must be greater than 0");
    }
    const data = {
      grainId,
      productName: grain?.product.productName,
      price: grain?.price,
      quantity: Number(quantity || 0),
      sellingPrice: Number(sellingPrice || 0),
      category,
    };
    dispatch(addOrderGrain(data));
    setOpen(false);
    form.reset();
    setGrain(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby="product-modal-description"
        className="w-[calc(100vw-32px)] max-w-[676px] h-[calc(100vh-32px)] max-h-max flex items-center justify-center flex-wrap p-0 "
      >
        <DialogHeader className="w-full h-full max-h-max overflow-auto p-4 sm:p-6">
          <DialogTitle className="text-center text-2xl font-bold text-black-900">
            Add Grain
          </DialogTitle>
          <DialogDescription id="product-modal-description">
            Fill in the form below to add a new grain product to the order.
          </DialogDescription>

          <div className="w-full pt-6">
            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-4 w-full"
            >
              <div className="w-full flex flex-col gap-2 ">
                <span className="label whitespace-nowrap hidden sm:block">
                  Product Id :
                </span>
                <GrainSearch
                  defaultItem={selectedOrder}
                  grain={grain}
                  setGrain={setGrain}
                />
              </div>
              <Input
                label="Product Name : "
                placeholder="Product Name"
                name="productName"
                required
                readOnly
                defaultValue={grain?.product?.productName || ""}
                labelClass="hidden sm:block"
              />
              <Input
                labelClass="hidden sm:block"
                label="Quantity Left : "
                placeholder="Quantity Left"
                name="quantityLeft"
                required
                readOnly
                defaultValue={grain?.quantity || ""}
              />
              <Input
                labelClass="hidden sm:block"
                label="Price : "
                placeholder="Price"
                name="price"
                required
                readOnly
                defaultValue={grain?.price}
              />
              <Input
                labelClass="hidden sm:block"
                label="Sale Price : "
                placeholder="Sale Price"
                name="sellingPrice"
                required
                defaultValue={selectedOrder?.sellingPrice}
              />
              <NumberInput
                labelClass="hidden sm:block"
                label="Sales Quantity : "
                placeholder="Sales Quantity"
                name="quantity"
                required
                max={grain?.quantity || 0}
                defaultValue={selectedOrder?.quantity?.toString() || ""}
              />
              <CategorySelect
                label="Category"
                defaultValue={selectedOrder?.category || "kg"}
                name="category"
                labelClass="hidden sm:block"
              />
              <div className="flex items-end justify-end">
                <Button className="py-6 px-10">Add Grain</Button>
              </div>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ProductAddModal;
