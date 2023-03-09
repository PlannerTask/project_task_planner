import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { TaskContext } from "../../../Providers/TaskContext";
import { Input } from "../../Form/Input";

interface IBodyModal {
  nameBtn: string;
  onClose: () => void;
  func: string;
  id: string;
}

interface IFormModal {
  name: string;
  description: string;
}

const index = ({ nameBtn, onClose, func, id }: IBodyModal) => {
  const { register, handleSubmit } = useForm<IFormModal>();
  const { createTask, updateTask } = useContext(TaskContext);

  const submit: SubmitHandler<IFormModal> = (formData) => {
    if (func === "update") {
      updateTask(formData, id);
      onClose();
    } else {
      createTask(formData);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        id="Title"
        type="text"
        placeholder="Title"
        label="Title"
        text="Title"
        register={register("name")}
      />
      <label htmlFor="Description">Description</label>
      <textarea
        id="Description"
        placeholder="Description"
        {...register("description")}
      ></textarea>
      <div>
        <button type="submit">{nameBtn}</button>
        <button onClick={() => onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default index;
