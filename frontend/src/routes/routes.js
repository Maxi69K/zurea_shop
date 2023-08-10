import React from 'react'
import App from '../App';
import ErrorPageComponent from '../pages/ErrorPage.Component';
import HomePageComponent from '../pages/HomePage.Component';
import LoginPageComponent from '../pages/LoginPage.Component';
import UserPageComponent from '../pages/UserPage.Component';
import ShopPageComponent from '../pages/ShopPage.Component';
import ContactPageComponent from '../pages/ContactPage.Component';
import ProductCreatePageComponent from '../pages/ProductCreatePage.Component';
import UserProductPageComponent from '../pages/UserProductPage.Component';
import AuthGuardComponent from '../utils/AuthGuard.Component';
import RegisterPageComponent from '../pages/RegisterPage.Component';
import ActivationAccountPageComponent from '../pages/ActivationAccountPage.Component';

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
        path: 'contact',
        element: <ContactPageComponent />,
      },
      {
        path: 'login',
        element: <LoginPageComponent />,
      },
      {
        path: 'register',
        element: <RegisterPageComponent />,
      },
      {
        path: 'activate-account/:userId',
        element: <ActivationAccountPageComponent />,
      },
      {
        path: 'user/:id',
        element: (
          <AuthGuardComponent>
            <UserPageComponent />
          </AuthGuardComponent>
        ),
      },
      {
        path: 'shop',
        element: <ShopPageComponent />,
      },
      {
        path: 'shop/:searchParams',
        element: <ShopPageComponent />, // need for url params (is not required for the query params)
      },
      {
        path: '/product/create',
        element: (
          <AuthGuardComponent>
            <ProductCreatePageComponent />
          </AuthGuardComponent>
        ),
      },
      {
        path: '/product/:productId/edit',
        element: (
          <AuthGuardComponent>
            <ProductCreatePageComponent />
          </AuthGuardComponent>
        ),
      },
      {
        path: '/user/products',
        element: (
          <AuthGuardComponent>
            <UserProductPageComponent />
          </AuthGuardComponent>
        ),
      },
    ],
  },
];

export default routes;