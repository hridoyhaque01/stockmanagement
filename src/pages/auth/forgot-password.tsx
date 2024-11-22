import { authRoutes, images } from "@/common/constants";
import { ArrowLeft } from "@/common/constants/svgs";
import Input from "@/components/shared/Input";
import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <section className="h-screen font-poppins">
      <div className="flex h-full">
        <div className="w-full sm:max-w-[520px] px-10 h-full flex items-center justify-center flex-wrap relative">
          <Link
            to={authRoutes.login.path}
            className="bg-neutral-200 w-11 h-11 rounded-full shadow-md flex items-center justify-center absolute top-5 left-5"
          >
            <ArrowLeft />
          </Link>
          <div className="w-full">
            <img
              src={images.logo}
              alt="grain map"
              className="w-full max-w-[220px] mx-auto object-contain"
            />
            <h2 className="text-2xl font-medium text-center text-black-900 mt-3">
              Forgot Password?
            </h2>
            <p className="text-sm text-black-600 text-center sm:max-w-[80%] mx-auto mt-1">
              No warries, we'll send you reset instructions.
            </p>
            <form action="#" className="mt-10" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-4">
                <Input placeholder="Email address" required />
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
    </section>
  );
}

export default ForgotPassword;
