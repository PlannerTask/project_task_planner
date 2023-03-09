import React from "react";

interface IModal {
  title: string;
  onClose: () => void;
}

const index = ({ title, onClose }: IModal) => {
  return (
    <header>
      <h1>{title}</h1>
      <button onClick={() => onClose()}>X</button>
    </header>
  );
};

export default index;
