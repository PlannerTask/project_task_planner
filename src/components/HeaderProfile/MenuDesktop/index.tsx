import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Providers/UserContext';
import { StyledDesktopMenu } from './style';

export const MenuDesktop = () => {
  const { logout } = useContext(UserContext);

  return (
    <StyledDesktopMenu>
      <div className="container-desktop-menu">
        <div>
          <Link to='/home'>Home</Link>
          <Link to='/profile'>Account</Link>
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
    </StyledDesktopMenu>
  );
};
