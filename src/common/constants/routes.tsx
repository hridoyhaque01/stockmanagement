import Dashboard from "@/pages/admin";
import Home from "@/pages/auth";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import { RoutePathConfig } from "../types";

const adminRoutes: RoutePathConfig = {
  dashboard: {
    name: "Dashboard",
    path: "/admin",
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
    path: "/auth/register",
    activePath: "register",
    element: <Register />,
  },
};

export { adminRoutes, authRoutes };
