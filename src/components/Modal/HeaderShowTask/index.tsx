import React from "react";
import { ShowTaskHeader } from "./style";

interface IModal {
  taskSelected?: string;
  onClose: () => void;
}

const HeaderShowTask = ({ taskSelected, onClose }: IModal) => {
  return (
    <ShowTaskHeader>
      <h3 className="TaskTitle">{taskSelected}</h3>
      <button className="closeTaskBtn" onClick={() => onClose()}>
        x
      </button>
    </ShowTaskHeader>
  );
};

export default HeaderShowTask;
