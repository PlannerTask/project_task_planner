import React, { useContext } from "react";
import { TaskContext } from "../../../Providers/TaskContext";
import NoTask from "./NoTask";
import TaskItem from "./TaskItem";

interface ITaskList {
  setOpenModal: React.Dispatch<React.SetStateAction<string>>;
  openModal: string;
  onClose: () => void;
}

const TaskList = ({ setOpenModal, openModal, onClose }: ITaskList) => {
  const { tasksList } = useContext(TaskContext);

  if (tasksList) {
    return (
      <ul>
        {tasksList.map((task) => (
          <TaskItem
            key={task.id}
            name={task.name}
            task={task}
            setOpenModal={setOpenModal}
            openModal={openModal}
            onClose={onClose}
          />
        ))}
      </ul>
    );
  } else {
    return <NoTask />;
  }
};

export default TaskList;
