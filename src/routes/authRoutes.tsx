import { authRoutes } from "../constants";
import { Route } from "../types";

const { login, register, home } = authRoutes;

export const authRoute: Route[] = [
  {
    path: home.path,
    element: <home.element />,
  },
  {
    path: login.path,
    element: <login.element />,
  },
  {
    path: register.path,
    element: <register.element />,
  },
];
