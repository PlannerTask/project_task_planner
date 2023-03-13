import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../Providers/UserContext';
import { StyledDropMenu } from './style';

export const DropMenuProfile = () => {
  const { logout,setShowMenu } = useContext(UserContext);

  return (
    <StyledDropMenu>
      <button
        className="close-button"
        onClick={() => {
          setShowMenu(null);
        }}
      >
        <AiOutlineClose />
      </button>
      <div className="container-drop-menu">
        <div>
          <Link to={'/dashboard'}>Home</Link>
          <Link to={'/profile'}>Account</Link>
          <button
            className="logout-button"
            onClick={() => {
              logout()
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </StyledDropMenu>
  );
};
