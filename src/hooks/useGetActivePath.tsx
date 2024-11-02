import { adminRoutes, authRoutes, getPageTitle } from "@/common/constants";
import { RootState } from "@/store";
import {
  setActiveNavTitle,
  setActivePath,
  setSearchValue,
} from "@/store/modules/common/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function useGetActivePath() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { activePath } = useSelector((state: RootState) => state.common);
  const pathname = location?.pathname;
  const { dashboard, products, supplies, grains, sales, suppliers, customers } =
    adminRoutes;

  const checkAdminPaths = () => {
    if (pathname?.includes(dashboard.activePath)) {
      dispatch(setActivePath(dashboard.activePath));
    } else if (pathname?.includes(products.activePath)) {
      dispatch(setActivePath(products.activePath));
    } else if (pathname?.includes(supplies.activePath)) {
      dispatch(setActivePath(supplies.activePath));
    } else if (pathname?.includes(grains.activePath)) {
      dispatch(setActivePath(grains.activePath));
    } else if (pathname?.includes(sales.activePath)) {
      dispatch(setActivePath(sales.activePath));
    } else if (pathname?.includes(suppliers.activePath)) {
      dispatch(setActivePath(suppliers.activePath));
    } else if (pathname?.includes(customers.activePath)) {
      dispatch(setActivePath(customers.activePath));
    } else {
      dispatch(setActivePath(dashboard.activePath));
    }
    const isAdminRoute = location?.pathname?.includes("admin");
    const routes = isAdminRoute ? adminRoutes : authRoutes;
    const title = getPageTitle(pathname, routes);
    dispatch(setActiveNavTitle(title));
    dispatch(setSearchValue(""));
  };

  useEffect(() => {
    checkAdminPaths();
  }, [dispatch, location?.pathname]);
  return { activePath };
}
