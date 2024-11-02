import { adminRoutes } from "@/common/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/store";
import { logout } from "@/store/modules/auth/slice";
import { setSearchValue } from "@/store/modules/common/slice";
import { LogOutIcon, SearchIcon, UserPenIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { navTitle, searchValue } = useSelector(
    (state: RootState) => state.common
  );
  const { auth } = useSelector((state: RootState) => state.auth);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };
  return (
    <nav className="py-4 px-6 bg-white flex items-center">
      <h4 className="text-xl font-semibold text-black-700 whitespace-nowrap">{navTitle}</h4>
      <div className="w-full flex items-center justify-end gap-4">
        <label htmlFor="search" className="relative flex w-full max-w-[340px]">
          <input
            type="text"
            id="search"
            className="w-full border rounded-md pr-4 py-3 pl-10 outline-none focus:outline-none duration-300 placeholder:text-black-300 text-black-900 bg-white-100 text-sm"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearch}
          />
          <SearchIcon className="stroke-1 absolute top-1/2 -translate-y-1/2 left-3 text-black-300" />
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none w-11 aspect-square border rounded-full">
            <img
              src={auth?.profile?.imageUrl}
              alt=""
              className="w-full h-full rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[180px]" side="bottom" align="end">
            <DropdownMenuItem
              className="hover:bg-green-100 font-medium cursor-pointer"
              onClick={() => navigate(adminRoutes.profile.path)}
            >
              <UserPenIcon />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-200 hover:bg-red-100/10 font-medium cursor-pointer"
              onClick={() => dispatch(logout())}
            >
              <LogOutIcon className="text-red-200" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default AdminNavbar;
