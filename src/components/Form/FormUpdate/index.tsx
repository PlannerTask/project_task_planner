import { SubmitHandler, useForm } from 'react-hook-form';
import { ITaskUpdate } from '../../../Providers/TaskContext/types';
import { Input } from '../Input';
import { StyledDivForm } from './style';

export const FormUpdate = () => {
  const { register, handleSubmit } = useForm<ITaskUpdate>({});

  const submit: SubmitHandler<ITaskUpdate> = (data) => {
    console.log(data);
    //ainda nao terminado esperando a parte do login para poder altera o usuario
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
        
          <button className='button-update'>Save update</button>
    
      </form>
    </StyledDivForm>
  );
};
