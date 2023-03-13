import { Link } from "react-router-dom"
import { FormLogin } from "../../components/Form/FormLogin"
import { HeaderLogin } from "../../components/HeaderLogin"
import { StyledAsideLogin, StyledLoginPage } from "./style"

export const LoginPage =() =>{
    return(
        <StyledLoginPage>
            <div className='form__container'>
                <HeaderLogin/>
                <FormLogin/>
                <div className='bottom__container'>
                    <p>Don't have an account yet ?</p>
                    <Link to='/register'>Sign up</Link>
                </div>
            </div>
            <StyledAsideLogin>
                <div className='aside__container'>
                    <h2>Welcome!</h2>
                    <h3>Work without limits</h3>
                    <div className='lower__aside'>
                        <p>Time is the most valuable asset in life.</p>
                        <span>Enjoy...</span>
                    </div>
                </div>
            </StyledAsideLogin>
        </StyledLoginPage>
    )
}