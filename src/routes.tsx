import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { TaskProvider } from './Providers/TaskContext';
import Dashboard from './pages/Dashboard';
import { RegisterPage } from './pages/RegisterPage';
import { ProtectedRoutes } from './pages/ProtectedRoutes';

export const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<ProtectedRoutes />}>
      <Route
        index
        element={
          <TaskProvider>
            <Dashboard />
          </TaskProvider>
        }
      />
    </Route>

    <Route path="/profile" element={<ProtectedRoutes />}>
      <Route
        index
        element={
          <TaskProvider>
            <ProfilePage />
          </TaskProvider>
        }
      />
    </Route>
  </Routes>
);
