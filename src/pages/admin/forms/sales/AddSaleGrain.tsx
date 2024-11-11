import CategorySelect from "@/components/shared/CategorySelect";
import GrainSearch from "@/components/shared/GrainSearch";
import Input from "@/components/shared/Input";
import { Grain } from "@/store/modules/grains/types";
import { useState } from "react";

function AddSaleGrain() {
  const [grain, setGrain] = useState<Grain>();

  return (
    <form className="flex flex-col gap-4 w-full">
      <div className="w-full flex flex-col gap-2">
        <span className="label whitespace-nowrap">Product Id :</span>
        <GrainSearch grain={grain} setGrain={setGrain} />
      </div>
      <Input
        label="Product Name : "
        placeholder="Product Name"
        name="productName"
        required
        readOnly
        defaultValue={grain?.product.productName}
      />
      <Input
        label="Quantity Left : "
        placeholder="Quantity Left"
        name="productName"
        required
        readOnly
        defaultValue={grain?.quantity}
      />
      <Input
        label="Price : "
        placeholder="Price"
        name="price"
        required
        readOnly
        defaultValue={grain?.price}
      />
      <Input
        label="Sale Price : "
        placeholder="Sale Price"
        name="sellingPrice"
        required
      />
      <Input
        label="Sales Quantity : "
        placeholder="Sales Quantity"
        name="quantity"
        required
      />
      <CategorySelect
        label="Product Category"
        defaultValue="kg"
        name="productCategory"
      />
    </form>
  );
}

export default AddSaleGrain;
