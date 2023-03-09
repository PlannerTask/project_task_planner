import React, { useContext } from "react";
import { TaskContext } from "../../Providers/TaskContext";
import { ITask } from "../../Providers/TaskContext/types";
import { StyledModal } from "./BackgroundModal/style";
import HeaderModal from "./HeaderModal";

interface IModal {
  isOpen: string;
  onClose: () => void;
  task: ITask;
}

const index = ({ isOpen, onClose, task }: IModal) => {
  const { deleteTask } = useContext(TaskContext);

  if (isOpen != "delete") {
    return null;
  }

  return (
    <div>
      <StyledModal onClick={() => onClose()} />
      <dialog open>
        <HeaderModal title="Delete Task" onClose={onClose} />
        <body>
          <label>Title</label>
          <input disabled>nome da task</input>
          <div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => onClose}>Cancel</button>
          </div>
        </body>
      </dialog>
    </div>
  );
};

export default index;
