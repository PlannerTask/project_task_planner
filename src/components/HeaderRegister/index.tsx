import { Link } from "react-router-dom"
import { StyledHeaderRegister } from "./headerRegister"

export const HeaderRegister = () => {
    return (
        <StyledHeaderRegister>
            <div className="container-btn-back">
                <Link to='/'>Back</Link>
            </div>
            <h1>Task Planner</h1>
            <h6>Create a new account</h6>
        </StyledHeaderRegister>
    )
}