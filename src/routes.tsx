import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { TaskProvider } from './Providers/TaskContext';

export const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
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
