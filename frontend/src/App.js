import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavComponent from './components/nav/Nav.Component';
import HomePageComponent from './pages/HomePage.Component';
import LoginPageComponent from './pages/LoginPage.Component';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5050/api';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePageComponent />,
    },
    {
      path: '/login',
      element: <LoginPageComponent />,
    },
  ]);

  return (
    <>
      <NavComponent />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
