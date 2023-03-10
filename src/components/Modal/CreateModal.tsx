import React, { useContext } from 'react';
import { TaskContext } from '../../Providers/TaskContext';
import { StyledModal } from './BackgroundModal/style';
import BodyFormModal from './BodyFormModal';
import HeaderModal from './HeaderModal';
import { StyledDialog } from './style';

interface IModal {
  isOpen: boolean | null;
  onClose: () => void;
}

const CreateModal = ({ isOpen, onClose }: IModal) => {
  const { typesModal } = useContext(TaskContext);
  if (!isOpen && typesModal != 'create') {
    return null;
  }

  return (
    <div>
      <StyledModal onClick={() => onClose()} />
      <StyledDialog open>
        <HeaderModal title="Create Task" onClose={onClose} />
        <BodyFormModal nameBtn="Create" onClose={onClose} func="create" id="" />
      </StyledDialog>
    </div>
  );
};

export default CreateModal;
