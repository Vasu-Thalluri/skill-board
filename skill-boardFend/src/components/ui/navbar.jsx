import { Menu, Bell, CircleUserRound } from "lucide-react";

export function Navbar({ toggleSidebar }) {
  return (
    <div className="h-14 border-b bg-background flex items-center justify-between px-4">
      {/* <button
        className="p-2 rounded hover:bg-accent transition"
        onClick={toggleSidebar}
      ></button> */}

      <div className="flex justify-end gap-4">
        <Bell size={20} className="cursor-pointer hover:text-primary" />
        <CircleUserRound size={22} className="cursor-pointer" />
      </div>
    </div>
  );
}
