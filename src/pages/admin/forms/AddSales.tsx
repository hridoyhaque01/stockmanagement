import { adminRoutes } from "@/common/constants";
import { saleAddValidation } from "@/common/constants/validation";
import { SaleAddForm } from "@/common/types";
import ProductAddModal from "@/components/modals/ProductAddModal";
import GrainCard from "@/components/sales/GrainCard";
import CustomerSearch from "@/components/shared/CustomerSearch";
import DatePicker from "@/components/shared/DatePicker";
import Input from "@/components/shared/Input";
import NumberInput from "@/components/shared/NumberInput";
import RequestLoader from "@/components/shared/RequestLoader";
import { Button } from "@/components/ui/button";
import useToastify from "@/hooks/useToastify";
import { RootState } from "@/store";
import { Customer } from "@/store/modules/customers/types";
import { useAddSaleMutation } from "@/store/modules/sales/api";
import {
  resetOrderState,
  setCustomerAddStatus,
  setSaleCustomer,
  setSelectedOrder,
  updatePaidAmount,
} from "@/store/modules/sales/slice";
import { SaleOrder } from "@/store/modules/sales/types";
import { getUnixTime } from "date-fns";
import { MinusIcon, PlusCircleIcon, WheatIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddSales() {
  const [addSale, { isLoading }] = useAddSaleMutation();
  const { orders, customer, isNewCustomer, details } = useSelector(
    (state: RootState) => state.sales
  );
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { errorNotify, infoNotify } = useToastify();
  const [date, setDate] = useState<Date>();

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleUpdateProduct = (item: SaleOrder) => {
    setIsModalOpen(true);
    dispatch(setSelectedOrder(item));
  };

  const handleCustomer = (item: Customer) => {
    dispatch(setSaleCustomer(item));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const customerName = isNewCustomer
      ? form.customerName.value
      : customer?.customerName;
    const customerPhone = isNewCustomer
      ? form.customerPhone.value
      : customer?.customerName;
    const proccessTime = getUnixTime(date || new Date());

    const data: SaleAddForm = {
      customerId: isNewCustomer ? undefined : customer?.id,
      customerName: customerName || "",
      customerPhone: customerPhone || "",
      totalQuantity: Number(details?.totalQuantity || 0),
      totalPrice: Number(details?.totalPrice || 0),
      totalPaid: Number(details?.totalPaid || 0),
      totalDue: Number(details?.totalDue || 0),
      type: details?.type || "",
      orders: [...orders],
      proccessTime: proccessTime,
    };

    const { error } = saleAddValidation(data);

    if (error) {
      return errorNotify(error);
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    addSale(formData)
      .unwrap()
      .then((res) => {
        infoNotify(res?.message);
        navigate(adminRoutes.sales.path);
        dispatch(resetOrderState());
      })
      .catch((error) => {
        errorNotify(error?.data?.message);
      });
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
              {orders?.length > 0 ? (
                orders?.map((grain, index) => (
                  <GrainCard
                    handler={(value) => handleUpdateProduct(value as SaleOrder)}
                    item={grain}
                    key={index}
                  />
                ))
              ) : (
                <div className="text-base text-black-600 flex items-center gap-2">
                  <WheatIcon className="w-5 h-5" />
                  <span>No grains added</span>
                </div>
              )}
            </div>
            <div className="mt-6 ">
              <button
                className="flex items-center gap-2 text-red-100 text-base"
                type="button"
                onClick={handleModal}
              >
                <PlusCircleIcon className="w-5 h-5" />
                <span>Add Grain</span>
              </button>
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
              {isNewCustomer ? (
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
                      onClick={() => dispatch(setCustomerAddStatus(false))}
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
                      setCustomer={(value) => handleCustomer(value as Customer)}
                    />
                    <button
                      className="w-14 flex items-center justify-center bg-blue-600 text-white rounded-lg"
                      onClick={() => dispatch(setCustomerAddStatus(true))}
                    >
                      <PlusCircleIcon className="w-7 h-7" strokeWidth={1} />
                    </button>
                  </div>
                  <Input
                    placeholder="Customer name"
                    readOnly
                    defaultValue={customer?.customerName}
                  />
                </>
              )}

              <Input
                placeholder="Total Quantity"
                name="totalQuantity"
                required
                readOnly
                defaultValue={details?.totalQuantity}
              />
              <NumberInput
                placeholder="Total Price"
                name="totalPrice"
                defaultValue={details?.totalPrice?.toString()}
              />
              <NumberInput
                placeholder="Total Paid"
                name="totalPaid"
                defaultValue={details?.totalPaid?.toString()}
                setter={(value) => dispatch(updatePaidAmount(value))}
              />
              <NumberInput
                placeholder="Total Due"
                name="totalDue"
                defaultValue={details?.totalDue?.toString()}
                readOnly
              />
              <DatePicker date={date} setDate={setDate} />
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
      <ProductAddModal open={isModalOpen} setOpen={setIsModalOpen} />
      {isLoading && <RequestLoader />}
    </div>
  );
}

export default AddSales;
