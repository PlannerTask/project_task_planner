import { useContext} from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { UserContext } from '../../../Providers/UserContext';
import { DropMenuProfile } from './DropMenuProfile';


export const MenuMobileProfile = () => {
  const { showMenu, setShowMenu } = useContext(UserContext);
  return (
    <div className="container-menu-mobile">
      {showMenu ? (
        <DropMenuProfile />
      ) : (
        <button
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <HiOutlineMenu size={25} />
        </button>
      )}
    </div>
  );
};
