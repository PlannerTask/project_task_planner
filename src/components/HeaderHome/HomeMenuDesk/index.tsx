import { Link } from "react-router-dom";
import { StyledHomeMenuDesk } from "./style";

export const MenuHomeDesktop = () => {
  
    return (
      <StyledHomeMenuDesk>
        <div className="container-desktop-menu-home">
          <div>
            <Link to='/'>Login</Link>
            <Link className="btn-sign-up-home" to='/register'>Sign up</Link>
          </div>
        </div>
      </StyledHomeMenuDesk>
    );
  };