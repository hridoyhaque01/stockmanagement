import { createBrowserRouter } from "react-router-dom";
import { adminRoute } from "./adminRoutes";
import { authRoute } from "./authRoutes";

export const routes = createBrowserRouter([...adminRoute, ...authRoute]);
