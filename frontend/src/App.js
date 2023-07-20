import { Outlet } from 'react-router-dom';
import NavComponent from './components/nav/Nav.Component';
import FooterComponent from './components/footer/Footer.Component';
import axios from 'axios';
import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { saveUser } from './redux/user.slicer';
axios.defaults.baseURL = 'http://localhost:5050/api';

function App() {
  
  const dispatch = useDispatch();
  let userLocalStorageStr = useLocalStorage('zu_user')[0];

  useEffect(() => {
    if (userLocalStorageStr) {
      dispatch(saveUser(userLocalStorageStr));
    }
  });

  return (
    <>
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
