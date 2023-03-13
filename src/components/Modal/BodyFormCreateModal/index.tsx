import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { TaskContext } from "../../../Providers/TaskContext";
import { Input } from "../../Form/Input";
import { StyledFormModal } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IBodyModal {
  nameBtn: string;
  onClose: () => void;
  func: string;
}

interface IFormModal {
  name: string;
  description: string;
  userId: string | null;
}

const schema = yup
  .object({
    name: yup.string().max(22).required("The task Name field is required"),
    description: yup
      .string()
      .required("The task Description field is required"),
  })
  .required();

export const BodyFormCreateModal = ({ nameBtn, onClose, func }: IBodyModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormModal>({
    resolver: yupResolver(schema),
  });
  const { createTask, updateTask, taskSelected } = useContext(TaskContext);

  const submit: SubmitHandler<IFormModal> = (formData) => {
    const idUser = localStorage.getItem("@ID");
    const addIdData = () => {
      formData.userId = idUser;
      return formData;
    };
    addIdData();

    if (func === "update") {
      if (!!taskSelected) {
        updateTask(formData, taskSelected.id);
        onClose();
      }
    } else {
      createTask(formData);
      onClose();
    }
  };

  return (
    <StyledFormModal onSubmit={handleSubmit(submit)}>
      <Input
        id="Title"
        type="text"
        placeholder="Title"
        label="Title"
        text="Title"
        register={register("name")}
      />
      <p>{errors.name?.message}</p>
      <label htmlFor="Description">Description</label>
      <textarea
        id="Description"
        placeholder="Description"
        {...register("description")}
      ></textarea>
      <p>{errors.description?.message}</p>
      <div className="btnArea">
        <button className="green" type="submit">
          {nameBtn}
        </button>
        <button className="cancel" onClick={() => onClose()}>
          Cancel
        </button>
      </div>
    </StyledFormModal>
  );
};


