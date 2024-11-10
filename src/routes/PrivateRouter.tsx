import { AuthState } from "@/store/modules/auth/types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ChildrenProps } from "../common/types";

function PrivateRouter({ children }: ChildrenProps) {
  const { auth }: AuthState = useSelector(
    (state: { auth: AuthState }) => state.auth
  );
  const location = useLocation();
  const isAuthRoute = location?.pathname?.includes("auth");
  const isAdminRoute = location?.pathname?.includes("admin");
  const token = auth?.token;
  if (!token && isAdminRoute) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else if (token && isAuthRoute) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default PrivateRouter;
