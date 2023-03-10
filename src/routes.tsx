import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { TaskProvider } from './Providers/TaskContext';
import Dashboard from './pages/Dashboard';
import { RegisterPage } from './pages/RegisterPage';

export const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage/>}/>
    
    <Route
      path="/dashboard"
      element={
        <TaskProvider>
          <Dashboard />
        </TaskProvider>
      }
    />
    
    <Route
      path="/profile"
      element={
        <TaskProvider>
          <ProfilePage />
        </TaskProvider>
      }
    />
  </Routes>
);
