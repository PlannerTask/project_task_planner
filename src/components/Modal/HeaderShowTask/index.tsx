import { ShowTaskHeader } from "./style";

interface IModal {
  taskSelected?: string;
  onClose: () => void;
}

export const HeaderShowTask = ({ taskSelected, onClose }: IModal) => {
  return (
    <ShowTaskHeader>
      <h3 className="TaskTitle">{taskSelected}</h3>
      <button className="closeTaskBtn" onClick={() => onClose()}>
        x
      </button>
    </ShowTaskHeader>
  );
};


