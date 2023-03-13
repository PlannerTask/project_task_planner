import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../Providers/UserContext';
import { StyledDropMenuHome } from './DropMenuHome';


export const DropMenuHome = () => {
  const { setShowMenu } = useContext(UserContext);

  return (
    <StyledDropMenuHome>
      <button
        className="close-button-home"
        onClick={() => {
          setShowMenu(null);
        }}
      >
        <AiOutlineClose />
      </button>
      <div className="container-drop-menu-home">
        <div>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Sign up</Link>
        </div>
      </div>
    </StyledDropMenuHome>
  );
};
