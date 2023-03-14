import { MainShowTask } from "./style";
interface IBodyModal {
  taskSelected?: string;
}

export const BodyShowTask = ({ taskSelected }: IBodyModal) => {
  return (
    <MainShowTask>
      <h3 className="taskTitleDescription">Description</h3>
      <p className="taskDescription">{taskSelected}</p>
    </MainShowTask>
  );
};


