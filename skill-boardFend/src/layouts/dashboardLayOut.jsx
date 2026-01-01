import Sidebar from "../components/ui/sidebar";
//import { Navbar } from "@/components/ui/navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const hideSidebar = ["/", "/signup"];
  const ShouldShowSidebar = !hideSidebar.includes(location.pathname);
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {ShouldShowSidebar && <Sidebar open={open} setOpen={setOpen} />}

      <div className="flex-1 flex flex-col">
        {/* <Navbar toggleSidebar={() => setOpen(!open)} /> */}

        <div
          className="flex-1 overflow-y-auto p-6 transition-all duration-300 bg-white
"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
