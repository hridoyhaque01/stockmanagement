import { adminRoutes, auth, authRoutes, logo } from "@/common/constants";
import { ArrowLeft } from "@/common/constants/svgs";
import Input from "@/components/shared/Input";
import Password from "@/components/shared/Password";
import RequestLoader from "@/components/shared/RequestLoader";
import useToastify from "@/hooks/useToastify";
import { useLoginMutation } from "@/store/modules/auth/api";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { errorNotify, successNotify } = useToastify();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    const formData = new FormData();
    const data = { email, password };
    formData.append("data", JSON.stringify(data));
    login(formData)
      .unwrap()
      .then((res) => {
        successNotify(res?.message);
        navigate(adminRoutes.dashboard.path);
      })
      .catch((error) => {
        errorNotify(error?.data?.message, () => handleSubmit(event));
      });
  };
  return (
    <section className="h-screen font-poppins">
      <div className="flex h-full ">
        <div className="w-full sm:max-w-[520px] px-10 h-full flex items-center justify-center flex-wrap relative">
          <Link
            to={authRoutes.home.path}
            className="bg-green-300 w-11 h-11 rounded-full shadow-md flex items-center justify-center absolute top-5 left-5"
          >
            <ArrowLeft className="text-white" />
          </Link>
          <div className="w-full">
            <img
              src={logo}
              alt="grain map"
              className="w-full max-w-[220px] mx-auto object-contain"
            />
            <h2 className="text-2xl font-medium text-center text-black-900 mt-3">
              Welcome back :)
            </h2>
            <p className="text-sm text-black-600 text-center max-w-[80%] mx-auto mt-1">
              To keep connected with us please login with your personal
              information.
            </p>
            <form action="#" className="mt-10" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-4">
                <Input placeholder="Email address" name="email" required />
                <Password placeholder="Password" name="password" required />
                <Link
                  to={authRoutes.forgotPassword.path}
                  className="text-sm text-blue-700 underline -mt-2 text-right"
                >
                  forgot password?
                </Link>
                <button
                  type="submit"
                  className="w-full px-3 py-3.5 bg-green-500 text-white rounded-md text-sm mt-6"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-full hidden sm:block">
          <img src={auth} className="w-full h-full object-cover bg-fixed" />
        </div>
      </div>
      {isLoading && <RequestLoader />}
    </section>
  );
}

export default Login;
