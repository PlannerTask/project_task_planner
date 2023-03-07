import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ITask, ITaskContext, ITaskCreate, ITaskProviderProps, ITaskUpdate } from './types';

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);


export const TaskProvider = ({ children }: ITaskProviderProps) => {

  const [tasksList, setTasksList] = useState<ITask[] | null>(null)
  const id = localStorage.getItem('@ID');
  const token = localStorage.getItem('@TOKEN');

  const createTask = async (data: ITaskCreate) => {

    try {
      const response = await api.post('/tasks', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    
    const readTask = async (id: string | null) => {
      
      try {
        const response = await api.get(`/tasks?userId=${id}`);
        setTasksList(response.data)
      } catch (error) {
        console.log(error)
      }
    };
    readTask(id)
  },[tasksList])

  const updateTask = async (data: ITaskUpdate, id: string ) => {
    const token = localStorage.getItem('@TOKEN');

    try {
      const response = await api.patch(`/tasks/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async(id: string )=>{
    try {
      const response = api.delete(`/tasks/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <TaskContext.Provider value={{
      tasksList,
      setTasksList,
      createTask,
      updateTask,
      deleteTask}}>
      {children}
    </TaskContext.Provider>)
};
