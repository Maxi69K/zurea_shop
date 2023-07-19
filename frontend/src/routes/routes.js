import React from 'react'
import App from '../App';
import HomePageComponent from '../pages/HomePage.Component';
import LoginPageComponent from '../pages/LoginPage.Component';
import ErrorPageComponent from '../pages/ErrorPage.Component';
import UserPageComponent from '../pages/UserPage.Component';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPageComponent />,
    children: [
      {
        path: '/',
        element: <HomePageComponent />,
      },
      {
        path: 'login',
        element: <LoginPageComponent />,
      },
      {
        path: 'user/:id',
        element: <UserPageComponent />,
      },
    ],
  },
];

export default routes;