import { Home, Users, Settings } from "lucide-react";
import SidebarItem from "./SidebarItem";
const menuItems = [
  {
    to: "/",
    title: "داشبورد",
    icon: Home,
  },
  {
    to: "/users",
    title: "کاربران",
    icon: Users,
  },
  {
    to: "/settings",
    title: "تنظیمات",
    icon: Settings,
  },
];
function Sidebar() {
  return (
    <aside className="w-64 border-l bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b p-5">
        <h1 className="text-xl font-bold text-blue-600">پنل مدیریت</h1>
      </div>
      <nav className="flex flex-col p-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            to={item.to}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
