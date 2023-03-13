import { useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { TaskContext } from '../../../Providers/TaskContext';
import { DropMenuHome } from './DropMenuHome';


export const MenuMobileHome = () => {
  
  const { showMenuHome, setShowMenuHome } = useContext(TaskContext);
  
  return (
    <div className="container-menu-mobile-home">
      {showMenuHome ? (
        <DropMenuHome />
      ) : (
        <button
         onClick={() => {
          setShowMenuHome(true);
         }}
        >
          <HiOutlineMenu size={25} />
        </button>
      )}
    </div>
  );
};