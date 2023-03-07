import { FormUpdate } from '../../components/Form/FormUpdate';
import { HeaderProfile } from '../../components/HeaderProfile';

export const ProfilePage = () => {
  return (
    <>
      <HeaderProfile />
      <main>
        <div>
          <div>
            <h1>Account Management</h1>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h2>NOME DO USUARIO</h2>
            </div>
          </div>
          <FormUpdate />
        </div>
      </main>
    </>
  );
};
