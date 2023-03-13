import React, { useContext } from "react";
import { TaskContext } from "../../Providers/TaskContext";
import { DeleteModal } from "../TaskBoard/style";
import { StyledModal } from "./BackgroundModal/style";
import {BodyFormModal} from "./BodyFormUpdateModal";
import {BodyShowTask} from "./BodyShowTask";
import {HeaderModal} from "./HeaderModal";
import {HeaderShowTask} from "./HeaderShowTask";
import { StyledDialog } from "./style";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: IModal) => {
  const { typesModal, deleteTask, taskSelected } = useContext(TaskContext);
  if (!isOpen) {
    return null;
  } else if (typesModal === "patch" && !!taskSelected) {
    return (
      <div>
        <StyledModal onClick={() => onClose()} />
        <StyledDialog open>
          <HeaderModal onClose={onClose} title="Update Task" />
          <BodyFormModal
            nameBtn="Save"
            onClose={onClose}
            func="update"
            task={taskSelected}
          />
        </StyledDialog>
      </div>
    );
  } else if (!!taskSelected && typesModal === "delete") {
    return (
      <div>
        <StyledModal onClick={() => onClose()} />
        <StyledDialog open>
          <HeaderModal onClose={onClose} title="Delete Task" />
          <DeleteModal>
            <div className="deleteContainer">
              <label className="deleteTitle">Title</label>
              <input
                type="text"
                placeholder={taskSelected.name}
                disabled
                className="deleteInput"
              />
            </div>
            <div>
              <button
                className="deleteBtn"
                onClick={() => {
                  deleteTask();
                  onClose();
                }}
              >
                Delete
              </button>
              <button className="cancelBtn" onClick={() => onClose()}>
                Cancel
              </button>
            </div>
          </DeleteModal>
        </StyledDialog>
      </div>
    );
  }
  return (
    <div>
      <StyledModal onClick={() => onClose()} />
      <StyledDialog open>
        <HeaderShowTask taskSelected={taskSelected?.name} onClose={onClose} />
        <BodyShowTask taskSelected={taskSelected?.description} />
      </StyledDialog>
    </div>
  );
};


