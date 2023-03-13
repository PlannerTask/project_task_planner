import { StyledHeaderModal } from "./style";

interface IModal {
  title: string;
  onClose: () => void;
}

export const HeaderModal = ({ title, onClose }: IModal) => {
  return (
    <StyledHeaderModal>
      <h1>{title}</h1>
      <button onClick={() => onClose()}>X</button>
    </StyledHeaderModal>
  );
};


