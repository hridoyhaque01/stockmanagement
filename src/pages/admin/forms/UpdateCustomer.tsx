import { adminRoutes } from "@/common/constants";
import { customerAddValidation } from "@/common/constants/validation";
import { CustomerAddForm } from "@/common/types";
import Input from "@/components/shared/Input";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateCustomer() {
  const navigate = useNavigate();
  const { errorNotify } = useToastify();
  const { state } = useLocation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const customerName = form.customerName.value;
    const customerPhone = form.customerPhone.value;
    const customerEmail = form.customerEmail.value;
    const customerAddress = form.customerAddress.value;
    const data: CustomerAddForm = {
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
    };
    const { error } = customerAddValidation(data);
    if (error) return errorNotify(error);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
  };
  return (
    <div className="p-6">
      <div className="w-full bg-white p-6 rounded-2xl">
        <div className="p-3 bg-green-500 rounded-lg">
          <h2 className="text-base text-center sm:text-left font-medium text-white">
            Add Customer
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
              label="Name : "
              placeholder="Enter customer name"
              name="customerName"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
              defaultValue={state?.customerName}
            />
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Phone : "
              placeholder="Enter customer phone"
              name="customerPhone"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
              defaultValue={state?.customerPhone}
            />
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Email : "
              placeholder="Enter customer email"
              name="customerEmail"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              defaultValue={state?.customerEmail}
            />

            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Address : "
              placeholder="Enter customer address"
              name="customerAddress"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              defaultValue={state?.customerAddress}
            />
          </div>
          <div className="flex items-center justify-end mt-10 gap-4">
            <Button
              variant="cancel"
              size="lg"
              type="button"
              onClick={() => navigate(adminRoutes.customers.path)}
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

export default UpdateCustomer;
