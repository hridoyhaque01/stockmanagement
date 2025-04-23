import { adminRoutes } from "@/common/constants";
import { grainAddValidation } from "@/common/constants/validation";
import { GrainAddForm } from "@/common/types";
import CategorySelect from "@/components/shared/CategorySelect";
import DatePicker from "@/components/shared/DatePicker";
import Input from "@/components/shared/Input";
import NumberInput from "@/components/shared/NumberInput";
import ProductSearch from "@/components/shared/ProductSearch";
import RequestLoader from "@/components/shared/RequestLoader";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { useAddGrainHistoryMutation } from "@/store/modules/grains/api";
import { Product } from "@/store/modules/products/types";
import { getUnixTime } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddGrain() {
  const [addGrainHistory, { isLoading }] = useAddGrainHistoryMutation();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [product, setProduct] = useState<Product>();
  const { errorNotify, infoNotify } = useToastify();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const productQuantity = Number(form.productQuantity.value);
    const grainQuantity = Number(form.grainQuantity.value);
    const price = Number(form.price.value);
    const productCategory = form.productCategory.value;
    const grainCategory = form.grainCategory.value;
    const proccessTime = getUnixTime(date || new Date());

    const data: GrainAddForm = {
      productId: product?.id,
      productQuantity,
      grainQuantity,
      price,
      type: "proccess",
      productCategory,
      grainCategory,
      proccessTime: proccessTime,
    };

    const { error } = grainAddValidation(data);
    if (error) return errorNotify(error);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    addGrainHistory(formData)
      .unwrap()
      .then((res) => {
        infoNotify(res?.message);
        navigate(adminRoutes.grains.path);
      })
      .catch((error) => {
        errorNotify(error?.data?.message, () => handleSubmit(event));
      });
  };

  return (
    <div className="p-6">
      <div className="w-full bg-white p-6 rounded-2xl">
        <div className="p-3 bg-green-500 rounded-lg">
          <h2 className="text-base text-center sm:text-left font-medium text-white">
            Add Grain
          </h2>
        </div>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="mt-6 w-full  mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="w-full flex flex-col gap-2">
              <span className="label whitespace-nowrap">Product Id :</span>
              <ProductSearch product={product} setProduct={setProduct} />
            </div>
            <Input
              label="Product Name : "
              placeholder="Product Name"
              name="productName"
              required
              readOnly
              defaultValue={product?.productName}
            />
            <Input
              label="Avarage Price : "
              placeholder="Avarage Price"
              name="productName"
              required
              readOnly
              defaultValue={product?.avaragePrice}
            />
            <Input
              label="Quantity Left : "
              placeholder="Quantity Left"
              name="productName"
              required
              readOnly
              defaultValue={product?.quantity}
            />

            <NumberInput
              label="Product Quantity : "
              placeholder="Enter product quantity"
              name="productQuantity"
              required
            />
            <CategorySelect
              label="Product Category"
              defaultValue="kg"
              name="productCategory"
            />

            <NumberInput
              label="Grain Quantity : "
              placeholder="Enter grain quantity"
              name="grainQuantity"
              required
            />
            <CategorySelect
              label="Grain Category"
              defaultValue="kg"
              name="grainCategory"
            />
            <NumberInput
              label="Price : "
              placeholder="Enter grain price"
              name="price"
              required
            />
            <DatePicker label="Date : " date={date} setDate={setDate} />
          </div>
          <div className="flex items-center justify-end mt-10 gap-4">
            <Button
              variant="cancel"
              size="lg"
              type="button"
              onClick={() => navigate(adminRoutes.grains.path)}
            >
              Cancel
            </Button>
            <Button size="lg" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
      {isLoading && <RequestLoader />}
    </div>
  );
}

export default AddGrain;
