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
           <p>{errors.name?.message}</p>

           <Input label='Email Address' type='email' id='email' placeholder='Email Address' register={register('email')} text='Email Address'/> 
           <p>{errors.email?.message}</p>

           <Input label='Password' type='password' id='password' placeholder='Password' register={register('password')} text='Password'/> 
           <p>{errors.password?.message}</p>

           <Input label='Confirm Password' type='password' id='confirmPassword' placeholder='Confirm Password' register={register('confirmPassword')} text='Confirm Password'/> 
           <p>{errors.confirmPassword?.message}</p>

           <Input label='Image' type='text' id='img' placeholder='Url' register={register('img')} text='Image'/>

            <div className="button-sign-up">
                <button type="submit">
                Sign up
                </button>
            </div>
        </StyledFormRegister>
    )
}