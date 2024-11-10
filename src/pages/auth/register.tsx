import { authRoutes, images } from "@/common/constants";
import { ArrowLeft } from "@/common/constants/svgs";
import Input from "@/components/shared/Input";
import Password from "@/components/shared/Password";
import RequestLoader from "@/components/shared/RequestLoader";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useRegisterMutation } from "@/store/modules/auth/api";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const formData = new FormData();
    const data = { username, email, password };
    formData.append("data", JSON.stringify(data));
    register(formData)
      .unwrap()
      .then((res) => {
        toast({
          title: res?.message,
          variant: "success",
        });
        navigate(`${authRoutes.otpVerification.routePath}/${res?.data?.email}`);
      })
      .catch((error) => {
        toast({
          title: error?.data?.message,
          variant: "destructive",
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => handleSubmit(event)}
            >
              Try again
            </ToastAction>
          ),
        });
      });
  };
  return (
    <section className="h-screen font-poppins">
      <div className="flex h-full">
        <div className="w-full sm:max-w-[520px] px-4 sm:px-6 md:px-10 h-full flex items-center justify-center flex-wrap relative">
          <Link
            to={authRoutes.login.path}
            className="bg-green-300 w-11 h-11 rounded-full shadow-md flex items-center justify-center absolute top-5 left-5"
          >
            <ArrowLeft className="text-white" />
          </Link>
          <div className="w-full">
            <img
              src={images.logo}
              alt="grain map"
              className="w-full max-w-[220px] mx-auto object-contain"
            />
            <h2 className="text-2xl font-medium text-center text-black-900 mt-3">
              Create an account
            </h2>
            <p className="text-sm text-black-600 text-center sm:max-w-[80%] mx-auto mt-1">
              Create your account to efficiently manage your inventory and track
              your assets.
            </p>
            <form action="#" className="mt-10" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-4">
                <Input placeholder="Username" name="username" required />
                <Input placeholder="Email address" name="email" required />
                <Password placeholder="Password" name="password" required />

                <button
                  type="submit"
                  className="w-full px-3 py-3.5 bg-green-500 text-white rounded-md text-sm mt-6"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-full hidden sm:block">
          <img
            src={images.auth}
            className="w-full h-full object-cover bg-fixed"
          />
        </div>
      </div>
      {isLoading && <RequestLoader />}
    </section>
  );
}

export default Register;
