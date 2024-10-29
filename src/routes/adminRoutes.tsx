import { adminRoutes } from "../constants";
import { Route } from "../types";

const { dashboard } = adminRoutes;

export const adminRoute: Route[] = [
  {
    path: dashboard.path,
    element: <dashboard.element />,
  },
];
