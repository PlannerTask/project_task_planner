import { ReactNode } from "react";

export interface ITaskProviderProps {
  children: React.ReactNode;
}
export interface ITask {
  name: string;
  description: string;
  id: string;
  userId: number;
}

export interface ITaskCreate {
  name: string;
  description: string;
  userId: string | null;
}
export interface ITaskUpdate {
  name: string;
  description: string;
  userId: string | null;
}

export interface ITaskContext {
  showMenu: true | null;
  setShowMenu: React.Dispatch<React.SetStateAction<true | null>>;
  tasksList: ITask[] | null;
  setTasksList: React.Dispatch<React.SetStateAction<ITask[] | null>>;
  createTask: (data: ITaskCreate) => Promise<void>;
  updateTask: (data: ITaskUpdate, id: string) => Promise<void>;
  deleteTask: () => Promise<void>;
  setTypesModal: React.Dispatch<React.SetStateAction<string>>;
  typesModal: string;
  taskSelected: ITask | null;
  setTaskSelected: React.Dispatch<React.SetStateAction<ITask | null>>;
  openUpdateModal: boolean;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateModal: (task: ITask, id: string) => void;
  closeModal: () => void;
  showCreateModal: () => void;
  openCreateModal: boolean;
}
