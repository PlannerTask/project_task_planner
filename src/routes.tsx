import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { TaskProvider } from './Providers/TaskContext';
import Dashboard from './pages/Dashboard';
import { RegisterPage } from './pages/RegisterPage';
import { ProtectedRoutes } from './pages/ProtectedRoutes';
import { HomePage } from './pages/Home';

export const Router = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/" element={<HomePage/>}/>
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
