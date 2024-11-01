import Dashboard from "@/pages/admin";
import Home from "@/pages/auth";
import ForgotPassword from "@/pages/auth/forgot-password";
import Login from "@/pages/auth/login";
import OtpVerification from "@/pages/auth/otp-verification";
import Register from "@/pages/auth/register";
import { RoutePathConfig } from "../types";

const registerToken = import.meta.env.VITE_REGISTER_TOKEN;

const adminRoutes: RoutePathConfig = {
  dashboard: {
    name: "Dashboard",
    path: "/admin/dashboard",
    activePath: "dashboard",
    element: <Dashboard />,
  },
};

const authRoutes: RoutePathConfig = {
  home: {
    name: "Home",
    path: "/",
    activePath: "home",
    element: <Home />,
  },
  login: {
    name: "Login",
    path: "/auth/login",
    activePath: "login",
    element: <Login />,
  },
  register: {
    name: "Register",
    path: `/auth/register/${registerToken}`,
    activePath: "register",
    element: <Register />,
  },
  otpVerification: {
    name: "Otp Verification",
    path: "/auth/otp-verification/:email",
    routePath: "/auth/otp-verification",
    activePath: "otp-verification",
    element: <OtpVerification />,
  },
  forgotPassword: {
    name: "Forgot Password",
    path: "/auth/forgot-password",
    activePath: "forgot-password",
    element: <ForgotPassword />,
  },
};

export { adminRoutes, authRoutes };
