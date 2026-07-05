import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  to: string;
  title: string;
  icon: LucideIcon;
}

function SidebarItem({ to, title, icon: Icon }: SidebarItemProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`flex items-center gap-2 rounded-md px-4 py-3 ${
            isActive ? "bg-blue-600" : "hover:bg-gray-100"
          }`}
        >
          <Icon
            size={20}
            className={
              isActive ? "text-white" : "text-blue-600 dark:text-gray-600"
            }
          />

          <span
            className={
              isActive ? "text-white" : "text-black dark:text-gray-500"
            }
          >
            {title}
          </span>
        </div>
      )}
    </NavLink>
  );
}

export default SidebarItem;
