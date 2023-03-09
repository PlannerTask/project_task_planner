import { FormUpdate } from '../../components/Form/FormUpdate';
import { HeaderProfile } from '../../components/HeaderProfile';
import { StyledMain } from './style';
export const ProfilePage = () => {
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
              <div>
                <img src="" alt="" />
                <h2>NOME DO USUARIO</h2>
              </div>
            </div>
          </div>
          <FormUpdate />
        </div>
      </StyledMain>
    </>
  );
};
