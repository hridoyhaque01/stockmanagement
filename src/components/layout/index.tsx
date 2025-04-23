import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/navigations/Navbar";

function Layout() {
  const { pathname } = useLocation();
  const isAuthLogin = pathname?.includes("auth");
  console.log(isAuthLogin);
  return (
    <div>
      {!isAuthLogin && <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
