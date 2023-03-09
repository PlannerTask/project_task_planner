import React, { useContext } from 'react';
import { TaskContext } from '../../Providers/TaskContext';
import { ITask } from '../../Providers/TaskContext/types';
import { StyledModal } from './BackgroundModal/style';
import HeaderModal from './HeaderModal';

interface IModal {
  isOpen: true | null;
  onClose: () => void;
  task: ITask;
}

const index = ({ isOpen, onClose, task }: IModal) => {
  const { deleteTask,typesModal } = useContext(TaskContext);
  if (!isOpen && typesModal != 'delete') {
    return null;
  }

  return (
    <div>
      <StyledModal onClick={() => onClose()} />
      <dialog open>
        <HeaderModal onClose={onClose} title="Delete Task" />
        <main>
          <label>Title</label>
          <input type="text" />
          <div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => onClose}>Cancel</button>
          </div>
        </main>
      </dialog>
    </div>
  );
};

export default index;
