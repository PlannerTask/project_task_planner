import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../Providers/UserContext';
import { IUpdateProfile } from '../../../Providers/UserContext/types';
import { Input } from '../Input';
import { schema } from './schema';
import { StyledDivForm } from './style';

export const FormUpdate = () => {
  const { updateProfile, user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateProfile>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      url: user?.url,
    },
  });
  const submit: SubmitHandler<IUpdateProfile> = (data) => {
    updateProfile(data);
  };
  return (
    <StyledDivForm>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label={'name'}
          type={'text'}
          placeholder={'Digite seu nome'}
          text={'Nome'}
          id={'name'}
          register={register('name')}
        
          
        />
        <Input
          label={'email'}
          id={'email'}
          type={'email'}
          placeholder={'Digite aqui seu email...'}
          text={'Email'}
          register={register('email')}
        
        />
        <Input
          label={'url'}
          id={'url'}
          type={'text'}
          placeholder={'Url'}
          text={'Imagem'}
          register={register('url')}
          
        />

        <button className="button-update">Save update</button>
      </form>
    </StyledDivForm>
  );
};
