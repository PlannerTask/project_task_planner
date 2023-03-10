import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../Providers/TaskContext";
import { UserContext } from "../../Providers/UserContext";
import CreateModal from "../Modal/CreateModal";
import { StyledDiv } from "./style";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const { user } = useContext(UserContext);
  const { showCreateModal, openCreateModal, closeModal } =
    useContext(TaskContext);

  return (
    <StyledDiv>
      <CreateModal isOpen={openCreateModal} onClose={closeModal} />
      <h2>{user?.name}</h2>
      <div className="taskBoardTitle">
        <h3>Task Board</h3>
        <button
          className="create"
          onClick={() => {
            showCreateModal();
          }}
        >
          +
        </button>
      </div>
      <TaskList />
    </StyledDiv>
  );
};

export default TaskBoard;
