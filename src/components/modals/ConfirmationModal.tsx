import { images } from "@/common/constants";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
function ConfirmationModal({
  open = false,
  setOpen = () => {},
  handler = () => {},
  description = "Are you sure you want to delete this?",
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handler: () => void;
  description?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby="product-modal-description"
        className="w-[calc(100vw-32px)] max-w-[426px] h-[calc(100vh-32px)] max-h-max flex items-center justify-center flex-wrap p-0 "
      >
        <DialogHeader className="w-full h-full max-h-max overflow-auto p-4 sm:p-6">
          <div className="w-full max-w-[160px] mx-auto mb-2">
            <img src={images.warning} alt="warning" className="w-full h-full" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold text-black-900">
            Are you sure?
          </DialogTitle>
          <DialogDescription
            className="text-center"
            id="product-modal-description"
          >
            {description}
          </DialogDescription>

          <div className="w-full flex items-center gap-2 pt-6">
            <Button
              type="button"
              variant="cancel"
              onClick={() => setOpen(false)}
              className="w-full max-w-none"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handler}
              className="w-full max-w-none"
            >
              Procced
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmationModal;
