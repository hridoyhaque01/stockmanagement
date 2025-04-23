import { adminRoutes } from "@/common/constants";
import Input from "@/components/shared/Input";
import RequestLoader from "@/components/shared/RequestLoader";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { useUpdateProductMutation } from "@/store/modules/products/api";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { errorNotify, infoNotify } = useToastify();

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
    updateProduct({
      id: state?.id,
      data: formData,
    })
      .unwrap()
      .then((res) => {
        navigate(adminRoutes.products.path);
        infoNotify(res?.message);
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
            Update Product
          </h2>
        </div>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="mt-6 w-full max-w-[520px] mx-auto"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Product Id : "
              placeholder="Enter product id"
              name="productId"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              defaultValue={state?.productId}
              readOnly
            />
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Product Name : "
              placeholder="Enter product name"
              name="productName"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
              defaultValue={state?.productName}
            />
          </div>
          <div className="flex items-center justify-end mt-10 gap-4">
            <Button
              variant="cancel"
              size="lg"
              type="button"
              onClick={() => navigate(adminRoutes.products.path)}
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

export default UpdateProduct;
