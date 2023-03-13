import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('O nome nao pode ficar vazio'),
  email: yup.string().required('O email nao pode ficar vazio').email('Email é inválido'),
});
