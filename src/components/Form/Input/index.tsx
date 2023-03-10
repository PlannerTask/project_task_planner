import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledDivInput } from "./style";

interface IInput {
  text: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
<<<<<<< HEAD
  value?: string;
=======
  
>>>>>>> 1b9da5283911b8e7d708829529a71584d387aa4e
}
export const Input = ({
  id,
  type,
  placeholder,
  label,
  text,
  register,
  value,
}: IInput) => {
  return (
    <StyledDivInput>
      <label htmlFor={label}>{text}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        value={value}
      />
    </StyledDivInput>
  );
};
