import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'

const Router = () =>(
    <Routes>
        <Route path = '/' element={<Login/>} />
    </Routes>
)