import { adminRoutes } from "@/common/constants";
import { supplierAddValidation } from "@/common/constants/validation";
import { SupplierAddForm } from "@/common/types";
import Input from "@/components/shared/Input";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateSupplier() {
  const navigate = useNavigate();
  const { errorNotify } = useToastify();
  const { state } = useLocation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const supplierName = form.supplierName.value;
    const supplierPhone = form.supplierPhone.value;
    const supplierEmail = form.supplierEmail.value;
    const supplierAddress = form.supplierAddress.value;
    const data: SupplierAddForm = {
      supplierName,
      supplierPhone,
      supplierEmail,
      supplierAddress,
    };
    const { error } = supplierAddValidation(data);
    if (error) return errorNotify(error);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
  };
  return (
    <div className="p-6">
      <div className="w-full bg-white p-6 rounded-2xl">
        <div className="p-3 bg-green-500 rounded-lg">
          <h2 className="text-base text-center sm:text-left font-medium text-white">
            Update Supplier
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
              placeholder="Enter supplier name"
              name="supplierName"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
              defaultValue={state?.supplierName}
            />
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Phone : "
              placeholder="Enter supplier phone"
              name="supplierPhone"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              required
              defaultValue={state?.supplierPhone}
            />
            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Email : "
              placeholder="Enter supplier email"
              name="supplierEmail"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              defaultValue={state?.supplierEmail}
            />

            <Input
              wrapper="sm:flex-row sm:items-center sm:gap-4"
              label="Address : "
              placeholder="Enter supplier address"
              name="supplierAddress"
              labelClass="whitespace-nowrap sm:min-w-[110px] sm:text-right"
              defaultValue={state?.supplierAddress}
            />
          </div>
          <div className="flex items-center justify-end mt-10 gap-4">
            <Button
              variant="cancel"
              size="lg"
              type="button"
              onClick={() => navigate(adminRoutes.suppliers.path)}
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

export default UpdateSupplier;
