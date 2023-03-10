import React, { useContext } from "react";
import { TaskContext } from "../../../Providers/TaskContext";
import Modal from "../../Modal";
import NoTask from "./NoTask";
import { StyledUl } from "./style";
import TaskItem from "./TaskItem";

interface ITaskList {
  openModal: boolean;
  onClose: () => void;
}

const TaskList = () => {
  const { tasksList, openUpdateModal, closeModal } = useContext(TaskContext);

  if (tasksList) {
    return (
      <StyledUl>
        <Modal isOpen={openUpdateModal} onClose={closeModal} />
        {tasksList.map((task) => (
          <TaskItem key={task.id} name={task.name} task={task} />
        ))}
      </StyledUl>
    );
  } else {
    return <NoTask />;
  }
};

export default TaskList;
