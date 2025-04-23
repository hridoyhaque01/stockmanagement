import {
  adminRoutes,
  authRoutes,
  checkEmailValidity,
  images,
} from "@/common/constants";
import { ArrowLeft } from "@/common/constants/svgs";
import NumberInput from "@/components/shared/NumberInput";
import Password from "@/components/shared/Password";
import RequestLoader from "@/components/shared/RequestLoader";
import { useToast } from "@/hooks/use-toast";
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "@/store/modules/auth/api";
import { ToastAction } from "@radix-ui/react-toast";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function OtpVerification() {
  const { toast } = useToast();
  const { email } = useParams();
  const { state } = useLocation();
  const { payload } = state || {};
  const navigate = useNavigate();
  const [resendOtp, { isLoading: resendOtpLoading }] = useResendOtpMutation();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const otp = form.otp.value;
    const password = form?.password?.value;

    let data = {
      email: email,
      otp: Number(otp),
      password,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    verifyOtp({ data: formData, type: payload })
      .unwrap()
      .then((res) => {
        toast({
          title: res?.message,
          variant: "success",
        });
        if (payload == "forgot-password") {
          navigate(authRoutes.login.path);
        } else {
          navigate(adminRoutes.dashboard.path);
        }
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

  const handleResendOtp = () => {
    resendOtp(email)
      .unwrap()
      .then((res) => {
        toast({
          title: res?.message,
          variant: "success",
        });
      })
      .catch((error) => {
        toast({
          title: error?.data?.message,
          variant: "destructive",
          action: (
            <ToastAction altText="Try again" onClick={() => handleResendOtp()}>
              Try again
            </ToastAction>
          ),
        });
      });
  };

  useEffect(() => {
    if (!email || !checkEmailValidity(email)) {
      navigate(authRoutes.home.path);
    }
  }, []);

  return (
    <section className="h-screen font-poppins">
      <div className="flex h-full">
        <div className="w-full sm:max-w-[520px] px-10 h-full flex items-center justify-center flex-wrap relative">
          <Link
            to={authRoutes.forgotPassword.path}
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
              Login to your account
            </h2>
            <p className="text-sm text-black-600 text-center sm:max-w-[80%] mx-auto mt-1">
              Please check{" "}
              <span className="font-medium text-black-900">{email}</span> for an
              OTP. If you don't see it in your inbox, check the spam or
              promotions folder.
            </p>
            <form action="#" className="mt-10" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-4">
                <NumberInput placeholder="Enter OTP" name="otp" required />
                {payload == "forgot-password" && (
                  <Password
                    placeholder="New Password"
                    name="password"
                    required
                  />
                )}
                <button
                  className="text-sm text-blue-700  -mt-2 text-right"
                  onClick={handleResendOtp}
                  type="button"
                >
                  Resend OTP
                </button>
                <button
                  type="submit"
                  className="w-full px-3 py-3.5 bg-green-500 text-white rounded-md text-sm mt-6"
                >
                  Change Password
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
      {(resendOtpLoading || isLoading) && <RequestLoader />}
    </section>
  );
}

export default OtpVerification;
