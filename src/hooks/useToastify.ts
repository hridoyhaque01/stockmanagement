import { useToast } from "./use-toast";

function useToastify() {
  const { toast } = useToast();

  const successNotify = (message: string = "Proccess Completed") => {
    toast({
      title: message,
      variant: "success",
    });
  };

  const infoNotify = (message: string = "Proccess Completed") => {
    toast({
      title: message,
    });
  };

  const errorNotify = (message: string = "Something went wrong") => {
    toast({
      title: message,
      variant: "destructive",
    });
  };

  return {
    successNotify,
    infoNotify,
    errorNotify,
  };
}

export default useToastify;
