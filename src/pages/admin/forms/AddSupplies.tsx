import { adminRoutes } from "@/common/constants";
import { addSuppliesValidation } from "@/common/constants/validation";
import { AddSuppliesForm } from "@/common/types";
import CategorySelect from "@/components/shared/CategorySelect";
import DatePicker from "@/components/shared/DatePicker";
import Input from "@/components/shared/Input";
import NumberInput from "@/components/shared/NumberInput";
import ProductSearch from "@/components/shared/ProductSearch";
import SupplierSearch from "@/components/shared/SupplierSearch";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { Product } from "@/store/modules/products/types";
import { Supplier } from "@/store/modules/suppliers/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSupplies() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [product, setProduct] = useState<Product>();
  const [supplier, setSupplier] = useState<Supplier>();
  const { errorNotify } = useToastify();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const quantity = form.quantity.value;
    const price = Number(form.price.value || 0);
    const paidAmount = Number(form.paidAmount.value || 0);
    const dueAmount =
      paidAmount > price ? paidAmount - price : price - paidAmount;
    const type =
      paidAmount > price
        ? "Extra Paid"
        : paidAmount === price
        ? "Full Paid"
        : "Partially Paid";
    const data: AddSuppliesForm = {
      quantity: Number(quantity || 0),
      price: price,
      paidAmount: paidAmount,
      dueAmount: dueAmount,
      type: type,
      productId: product?.id,
      supplierId: supplier?.id,
      category: form.category.value,
      insertDate: date,
    };
    const { error } = addSuppliesValidation(data);
    if (error) return errorNotify(error);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    console.log(data);

    // const test = {
    //   quantity: 12,
    //   price: 200,
    //   paidAmount: 200,
    //   dueAmount: 0,
    //   productId: "671d1c9281a5cfad08bb4787",
    //   supplierId: "671d1c9690a23b692152b3ff",
    //   type: "Full Paid",
    //   category: "mon",
    // };
  };

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
    </div>
  );
}

export default AddSupplies;
