import React, { useState } from "react";
import CreateModal from "../Modal/CreateModal";
import { StyledDiv } from "./style";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const [openModal, setOpenModal] = useState("closed");

  const showModal = (type: string) => {
    setOpenModal(type);
  };

  const closeModal = () => {
    setOpenModal("closed");
  };
  return (
    <StyledDiv>
      <h2>Nome do Usuario</h2>
      <div className="taskBoardTitle">
        <h3>Task Board</h3>
        <button className="create" onClick={() => showModal("create")}>
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
