import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
