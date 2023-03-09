import React, { useContext } from "react";
import { TaskContext } from "../../Providers/TaskContext";
import { ITask } from "../../Providers/TaskContext/types";
import { StyledModal } from "./BackgroundModal/style";
import BodyFormModal from "./BodyFormModal";
import HeaderModal from "./HeaderModal";

interface IModal {
  isOpen: string;
  onClose: () => void;
  task: ITask;
}

const PatchModal = ({ isOpen, onClose, task }: IModal) => {
  if (isOpen != "patch") {
    return null;
  }

  return (
    <div>
      <StyledModal onClick={() => onClose()} />
      <dialog>
        <HeaderModal title="Update Task" />
        <BodyFormModal
          nameBtn="Save"
          onClose={onClose}
          func="update"
          id={task.id}
        />
      </dialog>
    </div>
  );
};

export default PatchModal;
