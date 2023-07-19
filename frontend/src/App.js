import { Outlet } from 'react-router-dom';
import NavComponent from './components/nav/Nav.Component';
import FooterComponent from './components/footer/Footer.Component';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5050/api';

function App() {
  return (
    <>
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
