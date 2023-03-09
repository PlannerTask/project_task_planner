import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { ProfilePage } from "./pages/ProfilePage";
// import Login from './pages/Login';

export const Router = () => (
  <Routes>
    {/* <Route path="/" element={<Login />} /> */}
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);
