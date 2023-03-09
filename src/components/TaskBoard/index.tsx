import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../Providers/TaskContext';
import CreateModal from '../Modal/CreateModal';
import { StyledDiv } from './style';
import TaskList from './TaskList';

const TaskBoard = () => {
  const [openModal, setOpenModal] = useState<true | null>(null);
  const { setTypesModal } = useContext(TaskContext);

  const showModal = () => {
    setOpenModal(true);
  };

  useEffect(() => {}, [openModal]);

  const closeModal = () => {
    setOpenModal(null);
  };
  return (
    <StyledDiv>
      <h2>Nome do Usuario</h2>
      <div className="taskBoardTitle">
        <h3>Task Board</h3>
        <button
          className="create"
          onClick={() => {
            setTypesModal('create');
            showModal();
          }}
        >
          +
        </button>
      </div>
      <TaskList
        setOpenModal={setOpenModal}
        openModal={openModal}
        onClose={closeModal}
      />
      <CreateModal isOpen={openModal} onClose={closeModal} />
    </StyledDiv>
  );
};

export default TaskBoard;
