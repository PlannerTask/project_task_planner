import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Providers/UserContext'
import { Router } from './routes'


export const App=()=> {


  return (
    <div className="App">
      <UserProvider>
      <Router/>
      </UserProvider>
      <ToastContainer
      position='top-left'
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
    </div>
  )
}


