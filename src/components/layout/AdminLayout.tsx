import useGetActivePath from "@/hooks/useGetActivePath";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../shared/navigations/AdminNavbar";
import AdminSidebar from "../shared/navigations/AdminSidebar";

function AdminLayout() {
  useGetActivePath();
  return (
    <main className="flex h-screen overflow-hidden bg-blue-50/50">
      <div className="h-full flex w-full">
        <AdminSidebar />
        <div className="w-full h-full flex flex-col overflow-x-hidden">
          <AdminNavbar />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminLayout;
