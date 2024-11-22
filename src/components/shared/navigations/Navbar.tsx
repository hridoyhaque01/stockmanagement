import { authRoutes, images } from "@/common/constants";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4 absolute top-0 left-0 w-full">
      <div className="w-full max-w-[1176px] mx-auto">
        <nav className="flex items-center justify-between gap-6">
          <Link to={authRoutes.home.path}>
            <img src={images.logo} alt="grain map" className="w-[150px]" />
          </Link>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className="block md:hidden"
              onClick={() => setShow(!show)}
            >
              {show ? <XIcon /> : <MenuIcon />}
            </button>
            <div
              className={cn(
                "absolute md:relative right-0 flex flex-col md:flex-row md:items-center gap-y-1 md:gap-x-8 lg:gap-x-10 text-sm bg-white shadow-lg md:bg-transparent md:shadow-none w-44 md:w-auto px-2 py-3 md:p-0 rounded-xl duration-300",
                show
                  ? "transform translate-y-0 opacity-100 pointer-events-auto"
                  : "transform translate-y-20 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto"
              )}
            >
              <Link
                className="flex hover:bg-blue-50 md:hover:bg-transparent duration-300 py-3 px-3 rounded-md md:p-0"
                to={authRoutes.home.path}
              >
                Home
              </Link>
              <Link
                className="flex hover:bg-blue-50 md:hover:bg-transparent duration-300 py-3 px-3 rounded-md md:p-0"
                to={authRoutes.home.path}
              >
                About Us
              </Link>
              <Link
                className="flex hover:bg-blue-50 md:hover:bg-transparent duration-300 py-3 px-3 rounded-md md:p-0"
                to={authRoutes.home.path}
              >
                Contact Us
              </Link>
              <Link
                to={authRoutes.login.path}
                className="flex px-10 py-2.5 rounded-full bg-blue-600 text-white"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
