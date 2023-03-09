import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import {
  IUpdateProfile,
  IUser,
  IUserContext,
  IUserProviderProps,
} from './types';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (data: IUser): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post('/login', data);
      toast.success('Login feito com sucesso!');
      window.localStorage.clear();
      window.localStorage.setItem('@TOKEN', response.data.accessToken);
      window.localStorage.setItem('@ID', response.data.user.id);
      setUser(response.data.user);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Login Inválido');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const registerUser = async (data: IUser): Promise<void> => {
    try {
      const response = await api.post('/register', data);
      toast.success('Cadastro feito com sucesso!');
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      toast.error('Cadastro inválido');
      console.log(error);
    }
  };
  const userLoad = async (): Promise<void> => {
    const token = localStorage.getItem('@TOKEN');
    const id = localStorage.getItem('@ID');
    if (token) {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        navigate('/dashboard');
      } catch (error) {
        toast.error('Faça login novamente');
        console.log(error);
        localStorage.removeItem('@TOKEN');
        localStorage.removeItem('@ID');
      }
    }
  };
  useEffect(() => {
    userLoad();
  }, []);

  const logout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@ID');
    setUser(null);
    navigate('/');
  };
  const updateProfile = async (data: IUpdateProfile) => {
    const token = localStorage.getItem('@TOKEN');
    const id = localStorage.getItem('@ID');
    try {
      const response = await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ user, loginUser, registerUser, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
