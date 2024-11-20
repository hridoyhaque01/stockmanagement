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
  grainHistory,
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
  productHistories,
  supplierSupplies,
  customerOrders,
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
        path: productHistories.path,
        element: productHistories.element,
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
      {
        path: grainHistory.path,
        element: grainHistory.element,
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
        path: supplierSupplies.path,
        element: supplierSupplies.element,
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
        path: customerOrders.path,
        element: customerOrders.element,
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
