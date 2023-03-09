import { Link } from 'react-router-dom';
import { StyledDesktopMenu } from './style';

export const MenuDesktop = ()=>{
  return (
    <StyledDesktopMenu>
      <div className="container-desktop-menu">
        <div>
          <Link to={'/dashboard'}>Home</Link>
          <Link to={'/profile'}>Account</Link>
          <button
            className="logout-button"
            onClick={() => {
              console.log('Logout');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </StyledDesktopMenu>
  );
};
