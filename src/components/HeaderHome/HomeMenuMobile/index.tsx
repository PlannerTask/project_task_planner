import { useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { UserContext } from '../../../Providers/UserContext';
import { DropMenuHome } from './DropMenuHome';


export const MenuMobileHome = () => {
  
  const { showMenu, setShowMenu} = useContext(UserContext);
  
  return (
    <div className="container-menu-mobile-home">
      {showMenu ? (
        <DropMenuHome />
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