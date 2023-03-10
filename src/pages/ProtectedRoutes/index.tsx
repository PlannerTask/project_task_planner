import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { UserContext } from "../../Providers/UserContext"

export const ProtectedRoutes = () =>{
const {user} = useContext(UserContext);
const navigate = useNavigate();
const token = localStorage.getItem('@TOKEN');

useEffect(()=>{
    if(!token){
        navigate('/');
    }
},[]);
return user ? <Outlet/> : null;
};