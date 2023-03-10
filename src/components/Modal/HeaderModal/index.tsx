import React from "react";
import { StyledHeaderModal } from "./style";

interface IModal {
  title: string;
  onClose: () => void;
}

const index = ({ title, onClose }: IModal) => {
  return (
    <StyledHeaderModal>
      <h1>{title}</h1>
      <button onClick={() => onClose()}>X</button>
    </StyledHeaderModal>
  );
};

export default index;
