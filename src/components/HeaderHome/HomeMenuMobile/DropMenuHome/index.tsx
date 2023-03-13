import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../../../Providers/TaskContext';
import { StyledDropMenuHome } from './DropMenuHome';


export const DropMenuHome = () => {
  const { setShowMenuHome } = useContext(TaskContext);

  return (
    <StyledDropMenuHome>
      <button
        className="close-button-home"
        onClick={() => {
          setShowMenuHome(null);
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
