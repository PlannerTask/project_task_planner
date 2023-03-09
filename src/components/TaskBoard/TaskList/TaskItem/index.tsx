import React from "react";
import { ITask, ITaskUpdate } from "../../../../Providers/TaskContext/types";
import PatchModal from "../../../Modal/PatchModal";
import DeleteModal from "../../../Modal/DeleteModal";

interface ITaskProps {
  name: string;
  task: ITask;
  setOpenModal: React.Dispatch<React.SetStateAction<string>>;
  openModal: string;
  onClose: () => void;
}

const TaskItem = ({
  name,
  task,
  setOpenModal,
  openModal,
  onClose,
}: ITaskProps) => {
  return (
    <li>
      <p>{name}</p>
      <button onClick={() => setOpenModal("delete")}>-</button>
      <button onClick={() => setOpenModal("patch")}>+</button>
      <DeleteModal isOpen={openModal} onClose={onClose} task={task} />
      <PatchModal isOpen={openModal} onClose={onClose} task={task} />
    </li>
  );
};

export default TaskItem;
