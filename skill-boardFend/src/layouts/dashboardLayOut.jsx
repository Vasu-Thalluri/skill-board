import Sidebar from "../components/ui/sidebar";
//import { Navbar } from "@/components/ui/navbar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar open={open} setOpen={setOpen} />

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
