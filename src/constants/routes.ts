import React from "react";
import { RoutePathConfig } from "../types";

const adminRoutes: RoutePathConfig = {
  dashboard: {
    name: "Dashboard",
    path: "/dashboard",
    activePath: "dashboard",
    element: React.lazy(() => import("../pages/admin")), 
  },
};

const authRoutes: RoutePathConfig = {
  home: {
    name: "Home",
    path: "/",
    activePath: "home",
    element: React.lazy(() => import("../pages/auth")),
  },
  login: {
    name: "Login",
    path: "/auth/login",
    activePath: "login",
    element: React.lazy(() => import("../pages/auth/login")),
  },
  register: {
    name: "Register",
    path: "/auth/register",
    activePath: "register",
    element: React.lazy(() => import("../pages/auth/register")),
  },
};

export { adminRoutes, authRoutes };
