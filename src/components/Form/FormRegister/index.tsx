import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../Providers/UserContext";
import { IUser } from "../../../Providers/UserContext/types";
import { Input } from "../Input";
import { StyledFormRegister } from "./formRegister";
import { registerSchema } from "./registerSchema"; 

export const FormRegister = () => {
    const {registerUser} = useContext(UserContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<IUser>({
        mode:'onChange',
        resolver: yupResolver(registerSchema)
    })

    const submit: SubmitHandler<IUser> = (data) => {
        registerUser(data);
        reset();
    };

    return (
        
        <StyledFormRegister onSubmit={handleSubmit(submit)}>
           <Input label='Name' type='text' id='name' placeholder='Full name' register={register('name')} text='Name'/>

           <Input label='Email Address' type='email' id='email' placeholder='Email Address' register={register('email')} text='Email Address'/> 

           <Input label='Password' type='password' id='password' placeholder='Password' register={register('password')} text='Password'/> 
           
           <Input label='Confirm Password' type='password' id='confirmPassword' placeholder='Confirm Password' register={register('password')} text='Confirm Password'/> 

           <Input label='Image' type='text' id='img' placeholder='Url' register={register('img')} text='Image'/>

            <div className="button-sign-up">
                <button type="submit">
                Sign up
                </button>
            </div>
        </StyledFormRegister>
    )
}