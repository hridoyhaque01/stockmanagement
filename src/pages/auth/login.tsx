import { auth, logo } from "@/common/constants";
import React from "react";

function Login() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <section className="h-screen font-poppins">
      <div className="flex h-full">
        <div className="w-full sm:max-w-[520px] h-full flex items-center justify-center flex-wrap">
          <div>
            <img
              src={logo}
              alt="grain map"
              className="w-full max-w-[220px] mx-auto object-contain"
            />
            <h2 className="text-2xl font-medium text-center text-black-900">
              Login to your account
            </h2>
            <form action="#" onSubmit={handleSubmit}>
              <div>
                <div className={`flex items-center gap-2`}>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md border-black-300 outline-none"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-full hidden sm:block">
          <img src={auth} className="w-full h-full object-cover bg-fixed" />
        </div>
      </div>
    </section>
  );
}

export default Login;
