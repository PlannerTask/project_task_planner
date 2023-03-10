import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../Providers/UserContext";
import { IUser } from "../../../Providers/UserContext/types";
import { Input } from "../Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledFormLogin } from "./style";

const schema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Required email'),
    password: yup
      .string()
      .required('Incorrect password'),
  });

export const FormLogin = ()=>{
    const {loginUser} = useContext(UserContext);
    const {register,handleSubmit, formState:{errors}} = useForm<IUser>({
        resolver:yupResolver(schema),
    });
    

    const submit: SubmitHandler<IUser> = (data) =>{
        loginUser(data);

        
    };
    return(
        <StyledFormLogin>
            <form onSubmit={handleSubmit(submit)}>
            <Input 
            label='Email Address'
            type='text' 
            placeholder='Email Address'
            text='Email Address'
            id='email'
            register={register('email')} />
            <p>{errors.email?.message}</p>
            <Input
            label='Password'
            type='password'
            placeholder='Password'
            text='Password'
            id='password'
            register={register('password')}/>
            <p>{errors.password?.message}</p>
            <button type='submit'>Sign in</button>
            </form>
            
        </StyledFormLogin>

    )
}