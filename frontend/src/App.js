import { Outlet } from 'react-router-dom';
import NavComponent from './components/nav/Nav.Component';
import FooterComponent from './components/footer/Footer.Component';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { saveUser } from './redux/user.slicer';
import LoaderComponent from './components/loader/Loader.Component';
axios.defaults.baseURL = 'http://localhost:5050/api';

function App() {
  
  const dispatch = useDispatch();
  const [isFinish, setIsFinish] = useState(false);
  let userLocalStorageStr = useLocalStorage('zu_user')[0];

  useEffect(() => {
    if (userLocalStorageStr) {
      dispatch(saveUser(userLocalStorageStr));
    }
    setIsFinish(true);
  });

  return isFinish && (
    <>
      <LoaderComponent />
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
