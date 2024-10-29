import { adminRoutes } from "../common/constants";
import { Route } from "../common/types";
import Layout from "../pages/layout";
import PrivateRouter from "./PrivateRouter";

const { dashboard } = adminRoutes;

export const adminRoute: Route[] = [
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      {
        path: dashboard.path,
        element: <dashboard.element />,
      },
    ],
  },
];
