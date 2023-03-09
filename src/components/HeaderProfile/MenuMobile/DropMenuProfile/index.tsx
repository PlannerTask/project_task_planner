import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../../../Providers/TaskContext';
import { UserContext } from '../../../../Providers/UserContext';
import { StyledDropMenu } from './style';

export const DropMenuProfile = () => {
  const { logout } = useContext(UserContext);
  const { setShowMenu } = useContext(TaskContext);

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
              console.log('Logout');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </StyledDropMenu>
  );
};