import React, { useContext } from "react";
import { ITask } from "../../../../Providers/TaskContext/types";
import { StyledLi } from "./style";
import { TaskContext } from "../../../../Providers/TaskContext";
import { GoGear } from "react-icons/go";
import { RxTrash } from "react-icons/rx";

interface ITaskProps {
  name: string;
  task: ITask;
}

const TaskItem = ({ name, task }: ITaskProps) => {
  const { setTypesModal } = useContext(TaskContext);
  const { showUpdateModal, tasksList } = useContext(TaskContext);

  const idValidate = (idTask: string) => {
    if (!!tasksList) {
      const taskObject = tasksList.find(
        (element: ITask) => element.id === idTask
      );

      if (taskObject) {
        showUpdateModal(task, taskObject.id);
      }
    }
  };

  return (
    <StyledLi>
      <p className="taskName">{name}</p>
      <div className="btnContainer">
        <button
          className="delete"
          onClick={() => {
            setTypesModal("delete");
            idValidate(task.id);
          }}
        >
          <RxTrash size={50} />
        </button>
        <button
          className="patch"
          onClick={() => {
            setTypesModal("patch");
            idValidate(task.id);
          }}
        >
          <GoGear size={10} />
        </button>
      </div>
    </StyledLi>
  );
};

export default TaskItem;
