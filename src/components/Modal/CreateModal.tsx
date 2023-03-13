import { useContext } from "react";
import { TaskContext } from "../../Providers/TaskContext";
import { StyledModal } from "./BackgroundModal/style";
import {BodyFormCreateModal} from "./BodyFormCreateModal";
import {HeaderModal} from "./HeaderModal";
import { StyledDialog } from "./style";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateModal = ({ isOpen, onClose }: IModal) => {
  const { typesModal } = useContext(TaskContext);
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <StyledModal onClick={() => onClose()} />
      <StyledDialog open>
        <HeaderModal title="Create Task" onClose={onClose} />
        <BodyFormCreateModal nameBtn="Create" onClose={onClose} func="create" />
      </StyledDialog>
    </div>
  );
};


