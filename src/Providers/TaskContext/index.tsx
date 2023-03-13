import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  ITask,
  ITaskContext,
  ITaskCreate,
  ITaskProviderProps,
  ITaskUpdate,
} from "./types";

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider = ({ children }: ITaskProviderProps) => {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [typesModal, setTypesModal] = useState("");
  const [taskSelected, setTaskSelected] = useState<ITask | null>(null);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const id = localStorage.getItem("@ID");
  const token = localStorage.getItem("@TOKEN");

  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const searchTaskList = tasksList.filter((task) => {
    if (task.name.toLowerCase().includes(search.toLowerCase())) {
      return task;
    } else if (search == "") {
      return tasksList;
    }
  });
  const showCreateModal = () => {
    setOpenCreateModal(true);
  };

  const showUpdateModal = (task: ITask, id: string) => {
    if (task.id === id) {
      setTaskSelected(task);
      setOpenUpdateModal(true);
    }
  };

  const closeModal = () => {
    setOpenUpdateModal(false);
    setOpenCreateModal(false);
    setTypesModal("");
    setTaskSelected(null);
  };

  const createTask = async (data: ITaskCreate):Promise<void> => {
    try {
      const response = await api.post("/tasks", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Task created successfully");
    } catch (error) {
      toast.error("Unable to create task");
      console.log(error);
    }
    readTask(id);
  };

  const readTask = async (id: string | null):Promise<void> => {
    try {
      const response = await api.get(`/tasks?userId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasksList(response.data);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    readTask(id);
  }, []);

  const updateTask = async (data: ITaskUpdate, id: string):Promise<void> => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.patch(`/tasks/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTask = tasksList.map((task) => {
        if (task.id == response.data.id) {
          
          return { ...task, ...data };
        } else {
          return task;
        }
      });
      toast.success("Job updated successfully");
      setTasksList(newTask as []);
    } catch (error) {
      toast.error("Error updating task");
      console.log(error);
    }
  };
  const deleteTask = async ():Promise<void> => {
    let taskId = taskSelected?.id;

    try {
      const response = api.delete(`/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const removeTask = tasksList.filter((task) => taskId != task.id);
      toast.success("successfully deleted task");
      setTasksList(removeTask);
    } catch (error) {
      toast.error("Error deleting task");
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasksList,
        setTasksList,
        createTask,
        updateTask,
        deleteTask,
        typesModal,
        setTypesModal,
        taskSelected,
        setTaskSelected,
        openUpdateModal,
        setOpenUpdateModal,
        showUpdateModal,
        closeModal,
        showCreateModal,
        openCreateModal,
        search,
        setSearch,
        searchValue,
        setSearchValue,
        searchTaskList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
