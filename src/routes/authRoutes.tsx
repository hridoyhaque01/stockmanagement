import { authRoutes } from "@/common/constants";
import { Route } from "@/common/types";
import Layout from "@/components/layout";
import PrivateRouter from "./PrivateRouter";

const { login, register, home, otpVerification, forgotPassword } = authRoutes;

export const authRoute: Route[] = [
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      {
        path: home.path,
        element: home.element,
      },
      {
        path: login.path,
        element: login.element,
      },
      {
        path: register.path,
        element: register.element,
      },
      {
        path: forgotPassword.path,
        element: forgotPassword.element,
      },
      {
        path: otpVerification.path,
        element: otpVerification.element,
      },
    ],
  },
];
