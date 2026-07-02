import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/users" element={<Users />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;