import { adminRoutes } from "@/common/constants";
import { addSuppliesValidation } from "@/common/constants/validation";
import { AddSuppliesForm } from "@/common/types";
import CategorySelect from "@/components/shared/CategorySelect";
import DatePicker from "@/components/shared/DatePicker";
import Input from "@/components/shared/Input";
import NumberInput from "@/components/shared/NumberInput";
import ProductSearch from "@/components/shared/ProductSearch";
import RequestLoader from "@/components/shared/RequestLoader";
import SupplierSearch from "@/components/shared/SupplierSearch";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { Product } from "@/store/modules/products/types";
import { Supplier } from "@/store/modules/suppliers/types";
import { useAddSupplyMutation } from "@/store/modules/supplies/api";
import { getUnixTime } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSupplies() {
  const [addSupply, { isLoading }] = useAddSupplyMutation();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [product, setProduct] = useState<Product>();
  const [supplier, setSupplier] = useState<Supplier>();
  const { errorNotify, infoNotify } = useToastify();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const quantity = form.quantity.value;
    const price = Number(form.price.value || 0);
    const avaragePrice = Number(form.avaragePrice.value || 0);
    const paidAmount = Number(form.paidAmount.value || 0);
    const dueAmount =
      paidAmount > price ? paidAmount - price : price - paidAmount;
    const type =
      paidAmount > price
        ? "Extra Paid"
        : paidAmount === price
        ? "Full Paid"
        : "Partially Paid";
    const proccessTime = getUnixTime(date || new Date());
    const data: AddSuppliesForm = {
      quantity: Number(quantity || 0),
      price: price,
      paidAmount: paidAmount,
      dueAmount: dueAmount,
      avaragePrice: avaragePrice,
      type: type,
      productId: product?.id,
      supplierId: supplier?.id,
      category: form.category.value,
      proccessTime: proccessTime,
    };
    const { error } = addSuppliesValidation(data);
    if (error) return errorNotify(error);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    addSupply(formData)
      .unwrap()
      .then((res) => {
        infoNotify(res.message);
        navigate(adminRoutes.supplies.path);
      })
      .catch((error) => {
        errorNotify(error?.data?.message, () => handleSubmit(event));
      });
  };
  console.log(product);
  return (
    <div className="p-6">
      <div className="w-full bg-white p-6 rounded-2xl">
        <div className="p-3 bg-green-500 rounded-lg">
          <h2 className="text-base text-center sm:text-left font-medium text-white">
            Add Supplies
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
              label="Previous Quantity : "
              placeholder="Previous Quantity"
              name="productQuantity"
              required
              readOnly
              defaultValue={product?.quantity}
            />
            <Input
              label="Previous Price : "
              placeholder="Previous Price"
              name="productName"
              required
              readOnly
              defaultValue={product?.avaragePrice}
            />
            <div className="w-full flex flex-col gap-2">
              <span className="label whitespace-nowrap">Supplier Phone :</span>
              <SupplierSearch supplier={supplier} setSupplier={setSupplier} />
            </div>
            <Input
              label="Supplier Name : "
              placeholder="Supplier Name"
              name="supplierName"
              required
              readOnly
              defaultValue={supplier?.supplierName}
            />

            <CategorySelect defaultValue="kg" name="category" />
            <DatePicker label="Date : " date={date} setDate={setDate} />
            <NumberInput
              label="Quantity : "
              placeholder="Enter product quantity"
              name="quantity"
              required
            />
            <NumberInput
              label="Total Price : "
              placeholder="Enter total price"
              name="price"
              required
            />

            <NumberInput
              label="Paid Amount : "
              placeholder="Enter paid amount"
              name="paidAmount"
              required
            />

            <NumberInput
              label="Avarage Price : "
              placeholder="Enter avarage price"
              name="avaragePrice"
              required
            />
          </div>
          <div className="flex items-center justify-end mt-10 gap-4">
            <Button
              variant="cancel"
              size="lg"
              type="button"
              onClick={() => navigate(adminRoutes.supplies.path)}
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

export default AddSupplies;
