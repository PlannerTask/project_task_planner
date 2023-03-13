import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(4, "The name needs at least 4 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .email("It is necessary to provide an email."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(/.{6,}/, "Password is too short."),
  confirmPassword: yup
  .string()
  .required()
  .oneOf([yup.ref("password")], "Password does not match."),
});


