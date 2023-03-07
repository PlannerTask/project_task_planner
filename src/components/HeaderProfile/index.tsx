import { useContext } from 'react';
import { Link } from 'react-router-dom'

export const HeaderProfile = () => {
  return (
    <header>
      <h2>Task Planner</h2>
      <div>
        <nav>
          <div>
            <Link to={'/'}>Home</Link>
            <button onClick={()=>{console.log('funcao de logout aqui')}}></button>
          </div>
        </nav>
      </div>
    </header>
  );
};
