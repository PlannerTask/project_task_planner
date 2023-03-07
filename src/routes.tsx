import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import Login from './pages/Login';

const Router = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);
