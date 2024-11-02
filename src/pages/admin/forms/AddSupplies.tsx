import { adminRoutes } from "@/common/constants";
import CategorySelect from "@/components/shared/CategorySelect";
import DatePicker from "@/components/shared/DatePicker";
import Input from "@/components/shared/Input";
import NumberInput from "@/components/shared/NumberInput";
import ProductSearch from "@/components/shared/ProductSearch";
import { Button } from "@/components/ui/button";
import { Product } from "@/store/modules/products/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSupplies() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [product, setProduct] = useState<Product>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const productId = form.productId.value;
    const productName = form.productName.value;
    const data = {
      productId,
      productName,
    };
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
          className="mt-6 w-full max-w-[520px] mx-auto"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="w-full flex items-center gap-2 sm:gap-4">
              <span className="label whitespace-nowrap sm:min-w-[110px] sm:text-right">
                Product Id :
              </span>
              <ProductSearch product={product} setProduct={setProduct} />
            </div>
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Product Name : "
              placeholder="Product Name"
              name="productName"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
              readOnly
              defaultValue={product?.productName}
            />
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Supplier Phone : "
              placeholder="Enter product id"
              name="supplierPhone"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
            />
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Supplier Name : "
              placeholder="Supplier Name"
              name="supplierName"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
              readOnly
            />

            <NumberInput
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Quantity : "
              placeholder="Enter product quantity"
              name="quantity"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
            />
            <CategorySelect defaultValue="kg" name="category" />

            <DatePicker label="Date : " date={date} setDate={setDate} />
            <NumberInput
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Total Price : "
              placeholder="Enter total price"
              name="price"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
            />

            <NumberInput
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Paid Amount : "
              placeholder="Enter paid amount"
              name="paidAmount"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
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
