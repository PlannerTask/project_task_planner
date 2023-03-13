import { useContext } from 'react';
import { FormUpdate } from '../../components/Form/FormUpdate';
import { HeaderProfile } from '../../components/HeaderProfile';
import { UserContext } from '../../Providers/UserContext';
import { StyledMain } from './style';
export const ProfilePage = () => {
  const { user } = useContext(UserContext)
  
  return (
    <>
      <HeaderProfile />
      <StyledMain>
        <div className="container-profile-update">
          <div className='container-info-profile'>
            <div>
              <h1>Account Management</h1>
            </div>
            <div className="container-user">
              <div className='container-profile-image'>
                {user?.url?<img src={user?.url} alt="Foto Perfil" /> :<h3>{user?.name?.slice(0,1)}</h3>}
                <h2>{user?.name}</h2>
              </div>
            </div>
          </div>
          <FormUpdate />
        </div>
      </StyledMain>
    </>
  );
};
