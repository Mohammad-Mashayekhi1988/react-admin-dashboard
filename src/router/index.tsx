import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/products",
    element: <Login />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);