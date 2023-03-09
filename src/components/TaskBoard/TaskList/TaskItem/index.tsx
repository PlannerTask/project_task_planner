import React, { useContext } from 'react';
import { ITask, ITaskUpdate } from '../../../../Providers/TaskContext/types';
import PatchModal from '../../../Modal/PatchModal';
import DeleteModal from '../../../Modal/DeleteModal';
import { StyledLi } from './style';
import { TaskContext } from '../../../../Providers/TaskContext';

interface ITaskProps {
  name: string;
  task: ITask;
  setOpenModal: React.Dispatch<React.SetStateAction<true | null>>;
  openModal: true | null;
  onClose: () => void;
}

const TaskItem = ({
  name,
  task,
  setOpenModal,
  openModal,
  onClose,
}: ITaskProps) => {
  const { setTypesModal } = useContext(TaskContext);
  return (
    <StyledLi>
      <p>{name}</p>
      <button
        onClick={() => {
          setTypesModal('delete');
          setOpenModal(true);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setTypesModal('patch');
          setOpenModal(true);
        }}
      >
        +
      </button>
      <DeleteModal isOpen={openModal} onClose={onClose} task={task} />
      <PatchModal isOpen={openModal} onClose={onClose} task={task} />
    </StyledLi>
  );
};

export default TaskItem;
