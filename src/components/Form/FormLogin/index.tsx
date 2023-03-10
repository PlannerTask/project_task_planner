import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Providers/UserContext";
import { IUser } from "../../../Providers/UserContext/types";
import { Input } from "../Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledFormLogin } from "./style";

const schema = yup.object({
    email: yup
      .string()
      .email('Insira um email válido')
      .required('Email obrigatório'),
    password: yup
      .string()
      .required('Senha incorreta'),
  });

export const FormLogin = ()=>{
    const {loginUser} = useContext(UserContext);
    const {register,handleSubmit} = useForm<IUser>({
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
            placeholder='Digite seu email'
            text='Email Address'
            id='email'
            register={register('email')} />
            <Input
            label='Password'
            type='password'
            placeholder='Dgite sua senha'
            text='Password'
            id='password'
            register={register('password')}/>
            <button type='submit'>Sign in</button>
            </form>
            
        </StyledFormLogin>

    )
}