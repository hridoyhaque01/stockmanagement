import AdminLayout from "@/components/layout/AdminLayout";
import Dashboard from "@/pages/admin";
import Customers from "@/pages/admin/Customers";
import AddGrain from "@/pages/admin/forms/AddGrain";
import AddProduct from "@/pages/admin/forms/AddProduct";
import AddSales from "@/pages/admin/forms/AddSales";
import AddSupplier from "@/pages/admin/forms/AddSupplier";
import AddSupplies from "@/pages/admin/forms/AddSupplies";
import UpdateCustomer from "@/pages/admin/forms/UpdateCustomer";
import UpdateProduct from "@/pages/admin/forms/UpdateProduct";
import UpdateSupplier from "@/pages/admin/forms/UpdateSupplier";
import Grains from "@/pages/admin/Grains";
import Products from "@/pages/admin/Products";
import Profile from "@/pages/admin/Profile";
import Sales from "@/pages/admin/Sales";
import Suppliers from "@/pages/admin/Suppliers";
import Supplies from "@/pages/admin/Supplies";
import Home from "@/pages/auth";
import ForgotPassword from "@/pages/auth/forgot-password";
import Login from "@/pages/auth/login";
import OtpVerification from "@/pages/auth/otp-verification";
import Register from "@/pages/auth/register";
import { RoutePathConfig } from "../types";
import AddCustomer from "@/pages/admin/forms/AddCustomer";

const registerToken = import.meta.env.VITE_REGISTER_TOKEN;

const adminRoutes: RoutePathConfig = {
  layout: {
    name: "Layout",
    path: "/admin",
    activePath: "layout",
    element: <AdminLayout />,
  },
  dashboard: {
    name: "Dashboard",
    path: "/admin/dashboard",
    activePath: "dashboard",
    element: <Dashboard />,
  },
  // products
  products: {
    name: "Products",
    path: "/admin/products",
    activePath: "products",
    element: <Products />,
  },
  addProduct: {
    name: "Add Product",
    path: "/admin/products/add-product",
    activePath: "products",
    element: <AddProduct />,
  },
  updateProduct: {
    name: "Update Product",
    path: "/admin/products/update-product",
    activePath: "products",
    element: <UpdateProduct />,
  },
  // supplies
  supplies: {
    name: "Supplies",
    path: "/admin/supplies",
    activePath: "supplies",
    element: <Supplies />,
  },
  addSupplies: {
    name: "Add Supplies",
    path: "/admin/supplies/add-supplies",
    activePath: "supplies",
    element: <AddSupplies />,
  },
  // grains
  grains: {
    name: "Grains",
    path: "/admin/grains",
    activePath: "grains",
    element: <Grains />,
  },
  addGrain: {
    name: "Add Grain",
    path: "/admin/grains/add-grain",
    activePath: "grains",
    element: <AddGrain />,
  },
  // sales
  sales: {
    name: "Sales",
    path: "/admin/sales",
    activePath: "sales",
    element: <Sales />,
  },
  addSales: {
    name: "Add Sales",
    path: "/admin/sales/add-sales",
    activePath: "sales",
    element: <AddSales />,
  },
  // suppliers
  suppliers: {
    name: "Suppliers",
    path: "/admin/suppliers",
    activePath: "suppliers",
    element: <Suppliers />,
  },
  addSupplier: {
    name: "Add Supplier",
    path: "/admin/suppliers/add-supplier",
    activePath: "suppliers",
    element: <AddSupplier />,
  },
  updateSupplier: {
    name: "Update Supplier",
    path: "/admin/suppliers/update-supplier",
    activePath: "suppliers",
    element: <UpdateSupplier />,
  },
  // customers
  customers: {
    name: "Customers",
    path: "/admin/customers",
    activePath: "customers",
    element: <Customers />,
  },
  addCustomer: {
    name: "Add Customer",
    path: "/admin/customers/add-customer",
    activePath: "customers",
    element: <AddCustomer />,
  },
  updateCustomer: {
    name: "Update Customer",
    path: "/admin/customers/update-customer",
    activePath: "customer",
    element: <UpdateCustomer />,
  },
  // profile
  profile: {
    name: "Profile",
    path: "/admin/profile",
    activePath: "profile",
    element: <Profile />,
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
