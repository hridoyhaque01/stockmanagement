import { adminRoutes, logo } from "@/common/constants";
import { RootState } from "@/store";
import { setSidebarShow } from "@/store/modules/common/slice";
import {
  BadgeDollarSignIcon,
  HandPlatterIcon,
  LayoutDashboardIcon,
  StoreIcon,
  UsersIcon,
  UsersRoundIcon,
  WheatIcon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const dispatch = useDispatch();
  const { dashboard, products, supplies, grains, sales, suppliers, customers } =
    adminRoutes;

  const { showSidebar, activePath } = useSelector(
    (state: RootState) => state.common
  );
  return (
    <aside className="relative shrink-0 h-full overflow-auto no-scrollbar select-none bg-white ">
      <div
        className={`w-[256px] py-6 shrink-0 h-full flex flex-col gap-10 fixed lg:relative top-0 left-0 ${
          showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }  duration-300 z-[999] bg-white`}
      >
        <Link
          to="/"
          className="w-full max-w-[220px] mx-auto sticky px-4 top-0 shrink-0"
          onClick={() => dispatch(setSidebarShow(false))}
        >
          <img src={logo} alt="" />
        </Link>
        <div className="h-full overflow-auto no-scrollbar">
          {/* nav items  */}
          <div className="flex flex-col text-base gap-0.5 text-black-900">
            <Link
              to={dashboard.path}
              className={`flex items-center p-4 gap-4 text-base font-medium hover:bg-green-500 hover:text-white ${
                activePath == dashboard.activePath
                  ? "text-white bg-green-500"
                  : ""
              } text-black-600 duration-300`}
              onClick={() => dispatch(setSidebarShow(false))}
            >
              <LayoutDashboardIcon />
              <span>Dashboard</span>
            </Link>
            <Link
              to={products.path}
              className={`flex items-center p-4 gap-4 text-base font-medium hover:bg-green-500 hover:text-white ${
                activePath == products.activePath
                  ? "text-white bg-green-500"
                  : ""
              } text-black-600 duration-300`}
              onClick={() => dispatch(setSidebarShow(false))}
            >
              <HandPlatterIcon />
              <span>Products</span>
            </Link>
            <Link
              to={supplies.path}
              className={`flex items-center p-4 gap-4 text-base font-medium hover:bg-green-500 hover:text-white ${
                activePath == supplies.activePath
                  ? "text-white bg-green-500"
                  : ""
              } text-black-600 duration-300`}
              onClick={() => dispatch(setSidebarShow(false))}
            >
              <StoreIcon />
              <span>Supplies</span>
            </Link>
            <Link
              to={grains.path}
              className={`flex items-center p-4 gap-4 text-base font-medium hover:bg-green-500 hover:text-white ${
                activePath == grains.activePath ? "text-white bg-green-500" : ""
              } text-black-600 duration-300`}
              onClick={() => dispatch(setSidebarShow(false))}
            >
              <WheatIcon />
              <span>Grains</span>
            </Link>
            <Link
              to={sales.path}
              className={`flex items-center p-4 gap-4 text-base font-medium hover:bg-green-500 hover:text-white ${
                activePath == sales.activePath ? "text-white bg-green-500" : ""
              } text-black-600 duration-300`}
              onClick={() => dispatch(setSidebarShow(false))}
            >
              <BadgeDollarSignIcon />
              <span>Sales</span>
            </Link>
            <Link
              to={suppliers.path}
              className={`flex items-center p-4 gap-4 text-base font-medium hover:bg-green-500 hover:text-white ${
                activePath == suppliers.activePath
                  ? "text-white bg-green-500"
                  : ""
              } text-black-600 duration-300`}
              onClick={() => dispatch(setSidebarShow(false))}
            >
              <UsersIcon />
              <span>Suppliers</span>
            </Link>
            <Link
              to={customers.path}
              className={`flex items-center p-4 gap-4 text-base font-medium hover:bg-green-500 hover:text-white ${
                activePath == customers.activePath
                  ? "text-white bg-green-500"
                  : ""
              } text-black-600 duration-300`}
              onClick={() => dispatch(setSidebarShow(false))}
            >
              <UsersRoundIcon />
              <span>Customers</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black-900/30 duration-200 z-[60] ${
          showSidebar ? "block lg:hidden" : "hidden"
        }`}
        onClick={() => dispatch(setSidebarShow(false))}
      ></div>
    </aside>
  );
}

export default AdminSidebar;
