import { Outlet } from "react-router-dom";
import Navbar from "../shared/navigations/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
