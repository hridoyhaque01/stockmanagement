import useToastify from "@/hooks/useToastify";
import { Dispatch, SetStateAction } from "react";
import Input from "../shared/Input";
import NumberInput from "../shared/NumberInput";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
function CustomerPaymentModal({
  dueAmount = 0,
  open = false,
  setOpen = () => {},
  paymentHandler = () => {},
}: {
  dueAmount?: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  paymentHandler: (formData: FormData) => void;
}) {
  const { errorNotify } = useToastify();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const amount = form.amount.value;
    if (!amount || amount == 0) return errorNotify("Amount is required");
    const formData = new FormData();
    formData.append("data", JSON.stringify({ amount: Number(amount) }));
    paymentHandler(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby="product-modal-description"
        className="w-[calc(100vw-32px)] max-w-[476px] h-[calc(100vh-32px)] max-h-max flex items-center justify-center flex-wrap p-0 "
      >
        <DialogHeader className="w-full h-full max-h-max overflow-auto p-4 sm:p-6">
          <DialogTitle className="text-center text-2xl font-bold text-black-900">
            Pay customer due
          </DialogTitle>
          <DialogDescription
            className="text-center"
            id="product-modal-description"
          >
            Fill the form below to pay customer
          </DialogDescription>

          <div className="w-full pt-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <Input
                label="Previous Due : "
                placeholder="Previous Due"
                name="previousDue"
                required
                readOnly
                defaultValue={dueAmount}
                labelClass="hidden sm:block"
              />

              <NumberInput
                labelClass="hidden sm:block"
                label="Paid Amount : "
                placeholder="Paid Amount"
                name="amount"
                required
                max={dueAmount}
              />

              <div className="flex items-end justify-center">
                <Button className="py-6 px-10">Submit</Button>
              </div>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CustomerPaymentModal;
