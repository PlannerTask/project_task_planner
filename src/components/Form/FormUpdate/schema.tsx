import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('O nome nao pode ficar vazio'),
  email: yup.string().required('O e-mail nao pode ficar vazio').email('E-mail inválido'),
});
