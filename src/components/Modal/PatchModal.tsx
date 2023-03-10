import React, { useContext } from 'react';
import { TaskContext } from '../../Providers/TaskContext';
import { ITask } from '../../Providers/TaskContext/types';
import { StyledModal } from './BackgroundModal/style';
import BodyFormModal from './BodyFormModal';
import HeaderModal from './HeaderModal';

interface IModal {
  isOpen: true | null;
  onClose: () => void;
  task: ITask;
}

const PatchModal = ({ isOpen, onClose, task }: IModal) => {
  const { typesModal } = useContext(TaskContext);

  if (!isOpen && typesModal != 'patch') {
    return null;
  }

  return (
    <div>
      <StyledModal onClick={() => onClose()} />
      <dialog>
        <HeaderModal onClose={onClose} title="Update Task" />
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
