import Nav from './components/Nav'
import AllRoutes from './components/AllRoutes'
import AuthContextProviderComponent from './components/Context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div>
    <AuthContextProviderComponent>
      <Nav />
      <AllRoutes />
      <ToastContainer />
    </AuthContextProviderComponent>
    </div>
  )
}

export default App
