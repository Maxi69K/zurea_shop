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
        path: 'user/:id',
        element: <UserPageComponent />,
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
        element: <ProductCreatePageComponent />,
      },
      {
        path: '/user/products',
        element: <UserProductPageComponent />,
      },
    ],
  },
];

export default routes;