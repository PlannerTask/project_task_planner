import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
 import {LoginPage} from './pages/LoginPage';

export const Router = () => (
  <Routes>
     <Route path="/" element={<LoginPage />} /> 
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);
