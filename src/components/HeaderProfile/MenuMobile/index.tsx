import { useContext, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { TaskContext } from '../../../Providers/TaskContext';
import { DropMenuProfile } from './DropMenuProfile';


export const MenuMobileProfile = () => {
  const { showMenu, setShowMenu } = useContext(TaskContext);
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
