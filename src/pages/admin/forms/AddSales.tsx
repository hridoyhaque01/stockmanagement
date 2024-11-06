import { adminRoutes } from "@/common/constants";
import { SaleGrain } from "@/common/types";
import GrainCard from "@/components/sales/GrainCard";
import CustomerSearch from "@/components/shared/CustomerSearch";
import Input from "@/components/shared/Input";
import NumberInput from "@/components/shared/NumberInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Customer } from "@/store/modules/customers/types";
import { MinusIcon, PlusCircleIcon, WheatIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSales() {
  const [customer, setCustomer] = useState<Customer>();
  const [grains, setOrders] = useState<SaleGrain[]>([]);
  const [addNewCustomer, setAddNewCustomer] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const form = event.target as HTMLFormElement;
  };
  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <div className="w-full md:max-w-[620px]">
        <div className="w-full  bg-white p-6 rounded-2xl">
          <div className="p-3 bg-green-500 rounded-lg">
            <h2 className="text-base text-center sm:text-left font-medium text-white">
              Add Grain
            </h2>
          </div>
          <div className="mt-6 w-full mx-auto">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/*  */}
              {grains?.length > 0 ? (
                <GrainCard />
              ) : (
                <div className="text-base text-black-600 flex items-center gap-2">
                  <WheatIcon className="w-5 h-5" />
                  <span>No grains added</span>
                </div>
              )}
            </div>
            <div className="mt-6 ">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="flex items-center gap-2 text-red-100 text-base"
                    type="button"
                    onClick={() => setOrders([])}
                  >
                    <PlusCircleIcon className="w-5 h-5" />
                    <span>Add Grain</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">
                        Name
                      </label>
                      <input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      {/* main form  */}
      <div className="w-full">
        <div className="bg-white p-6 rounded-2xl">
          <div className="p-3 bg-green-500 rounded-lg">
            <h2 className="text-base text-center sm:text-left font-medium text-white">
              Add Sale
            </h2>
          </div>
          <form
            action="#"
            onSubmit={handleSubmit}
            className="mt-6 w-full mx-auto"
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              {addNewCustomer ? (
                <>
                  <Input
                    placeholder="Enter customer phone"
                    name="customerPhone"
                    required
                  />
                  <div className="flex gap-4">
                    <Input
                      placeholder="Enter customer name"
                      name="customerName"
                      required
                      wrapper="w-full"
                    />
                    <button
                      className="w-14 flex items-center justify-center bg-red-300 text-white  rounded-lg"
                      onClick={() => setAddNewCustomer(false)}
                    >
                      <MinusIcon className="w-7 h-7" strokeWidth={1} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-4">
                    <CustomerSearch
                      customer={customer}
                      setCustomer={setCustomer}
                    />
                    <button
                      className="w-14 flex items-center justify-center bg-blue-600 text-white rounded-lg"
                      onClick={() => setAddNewCustomer(true)}
                    >
                      <PlusCircleIcon className="w-7 h-7" strokeWidth={1} />
                    </button>
                  </div>
                  <Input
                    placeholder="Customer name"
                    name="customerName"
                    readOnly
                  />
                </>
              )}

              <Input
                placeholder="Total Quantity"
                name="totalQuantity"
                required
                readOnly
              />
              <NumberInput placeholder="Total Price" name="totalPrice" />
              <NumberInput placeholder="Total Paid" name="totalPaid" />
              <NumberInput placeholder="Total Due" name="totalDue" />
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
      </div>
    </div>
  );
}

export default AddSales;
