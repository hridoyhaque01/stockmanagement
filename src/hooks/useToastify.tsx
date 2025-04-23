import { ToastAction } from "@/components/ui/toast";
import { useToast } from "./use-toast";

function useToastify() {
  const { toast } = useToast();

  const successNotify = (message: string = "Process Completed") => {
    toast({
      title: message,
      variant: "success",
    });
  };

  const infoNotify = (message: string = "Process Completed") => {
    toast({
      title: message,
    });
  };

  const errorNotify = (
    message: string = "Something went wrong",
    action?: () => void
  ) => {
    toast({
      title: message,
      variant: "destructive",
      action: !action ? (
        action
      ) : (
        <ToastAction altText="Try again" onClick={action}>
          Try again
        </ToastAction>
      ),
    });
  };

  return {
    successNotify,
    infoNotify,
    errorNotify,
  };
}

export default useToastify;
