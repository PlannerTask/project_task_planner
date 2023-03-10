import { FormRegister } from "../../components/Form/FormRegister";
import { HeaderRegister } from "../../components/HeaderRegister";
import { StyledContainerRegister } from "./registerPage";


  export const RegisterPage = () => {

    

    return (
        <>
        <StyledContainerRegister>
            <section className="container-form-register">
                <HeaderRegister/>
                <FormRegister/>
            </section>
            <section className="container-section-words">
                <h2 className="title-word-first">Getting organized has never been so easy!</h2>
                <h2 className="title-word-second">Start your day without limits</h2>
                <h2 className="title-word-third">Dont't leave to start your plans tomorrow... start today!</h2>
            </section>
        </StyledContainerRegister>
        </>
    )
  }