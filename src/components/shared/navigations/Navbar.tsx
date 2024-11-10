import { adminRoutes, authRoutes, images } from "@/common/constants";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white py-4">
      <div className="flex items-center justify-between gap-6 w-full max-w-[1176px] mx-auto">
        <Link to={authRoutes.home.path} className="w-full max-w-32 flex">
          <img src={images.logo} alt="logo" className="w-full object-contain" />
        </Link>
        <div className="flex items-center gap-10">
          <Link
            className="bg-blue-600 text-white px-6 py-3 rounded-md"
            to={authRoutes.login.path}
          >
            Login
          </Link>
          <Link
            className="bg-blue-600 text-white px-6 py-3 rounded-md"
            to={adminRoutes.dashboard.path}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
