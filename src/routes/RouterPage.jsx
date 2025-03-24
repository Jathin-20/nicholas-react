import React from 'react'

import Login from '@/components/utility/Login';
import Dashboard from '@/pages/Dashboard';
import { useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import MainWrapper from '@/layout/MainWrapper';
import Services from '@/pages/Services';
import ContactUs from '@/pages/ContactUs';
const RouterPage = () => {
  return useRoutes([
    {
        path: '/',
        element: <Login />,
      },
      {
        path: '/main',
        element: <MainWrapper />,
        children: [
          {
            path: 'dash', 
            element: <Dashboard />,
          },
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'services', 
            element: <Services />,
          },
          {
            path: 'contactus',
            element: <ContactUs />,
          },
        ],
      },
        // {
        //     path: '/404',
        //     element: <>404 - Page not found</>,

        // },
    ]);
}

export default RouterPage