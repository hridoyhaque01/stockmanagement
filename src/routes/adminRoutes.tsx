import { adminRoutes } from "@/common/constants";
import { Route } from "@/common/types";
import AdminLayout from "@/components/layout/AdminLayout";
import PrivateRouter from "./PrivateRouter";

const {
  layout,
  dashboard,
  products,
  supplies,
  grains,
  suppliers,
  sales,
  customers,
  profile,
  addProduct,
  updateProduct,
  addSupplies,
  addGrain,
  addSales,
  addSupplier,
  updateSupplier,
  addCustomer,
  updateCustomer,
} = adminRoutes;

export const adminRoute: Route[] = [
  {
    path: layout.path,
    element: (
      <PrivateRouter>
        <AdminLayout />
      </PrivateRouter>
    ),
    children: [
      {
        path: dashboard.path,
        element: dashboard.element,
      },
      // products
      {
        path: products.path,
        element: products.element,
      },
      {
        path: addProduct.path,
        element: addProduct.element,
      },
      {
        path: updateProduct.path,
        element: updateProduct.element,
      },
      // supplies
      {
        path: supplies.path,
        element: supplies.element,
      },
      {
        path: addSupplies.path,
        element: addSupplies.element,
      },
      // grains
      {
        path: grains.path,
        element: grains.element,
      },
      {
        path: addGrain.path,
        element: addGrain.element,
      },
      // sales
      {
        path: sales.path,
        element: sales.element,
      },
      {
        path: addSales.path,
        element: addSales.element,
      },
      // suppliers
      {
        path: suppliers.path,
        element: suppliers.element,
      },
      {
        path: addSupplier.path,
        element: addSupplier.element,
      },
      {
        path: updateSupplier.path,
        element: updateSupplier.element,
      },
      // customers
      {
        path: customers.path,
        element: customers.element,
      },
      {
        path: addCustomer.path,
        element: addCustomer.element,
      },
      {
        path: updateCustomer.path,
        element: updateCustomer.element,
      },
      // profile
      {
        path: profile.path,
        element: profile.element,
      },
    ],
  },
];
