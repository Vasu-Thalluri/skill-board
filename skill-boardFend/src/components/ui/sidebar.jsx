import { cn } from "@/lib/utils";
import {
  Home,
  BadgeCheck,
  FolderKanban,
  User,
  LogOut,
  Layers,
  Menu,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logOut from "@/pages/LogOut";

export default function Sidebar({ open, setOpen }) {
  const logout = logOut();
  return (
    <div
      className={cn(
        "h-screen bg-background border-r shadow-sm transition-all duration-300 flex flex-col",
        open ? "w-64" : "w-20"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b h-16 relative">
        <h1
          className={cn(
            "text-xl font-bold whitespace-nowrap transition-all absolute left-4",
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          SkillBoard
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-100 absolute right-4"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col mt-4 gap-2">
        <SidebarItem icon={<Home />} label="Dashboard" open={open} to="/home" />
        <SidebarItem
          icon={<Layers />}
          label="Learning Goals"
          open={open}
          to="/goals"
        />
        <SidebarItem
          icon={<BadgeCheck />}
          label="My Skills"
          open={open}
          to="/skills"
        />
        <SidebarItem
          icon={<FolderKanban />}
          label="My Projects"
          open={open}
          to="/projects"
        />
        <SidebarItem icon={<User />} label="Profile" open={open} />
      </nav>
      {/* LOGOUT BUTTON FIXED AT BOTTOM */}
      <div className="mt-auto w-full p-4">
        <div
          onClick={logout}
          className={cn(
            "flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-100 transition-all",
            open ? "flex-row justify-start" : "flex-col justify-center"
          )}
        >
          <LogOut className="text-gray-700 text-xl" />
          {open && (
            <button className="font-medium text-gray-800">Logout</button>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, open, to }) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-100 transition-all w-full",
        open ? "flex-row justify-start" : "flex-col justify-center"
      )}
    >
      <div className="text-gray-700 text-xl">{icon}</div>
      {open && <span className="font-medium text-gray-800">{label}</span>}
    </Link>
  );
}
