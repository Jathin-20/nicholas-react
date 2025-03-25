import React from "react";

import Login from "@/components/utility/Login";
import Dashboard from "@/pages/Dashboard";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import MainWrapper from "@/layout/MainWrapper";
import Services from "@/pages/Services";
import ContactUs from "@/pages/ContactUs";
import Profile from "@/pages/Profile";
import Portfolio from "@/pages/Portfolio";

const RouterPage = () => {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: (
        <>
          {" "}
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-red-500 text-[100px] m-3">404</h2>
            <p className="text-2xl">Page not found</p>
            <div className="flex justify-center items-center gap-2 mt-5">
              <Link to="/main/dash" className="underline">
                <span>Dashboard</span>
              </Link>
              <Link to="/main/home" className="underline">
                <span>Home</span>
              </Link>
            </div>
          </div>
        </>
      ),
    },
    //   {
    //     path: '/auth',
    //     element: <Protected />,
    //     children: [
    {
      path: "main",
      element: <MainWrapper />,
      children: [
        {
          path: "dash",
          element: <Dashboard />,
        },
        {
          path: "home",
          element: <Home />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "portfolio",
              element: <Portfolio />,
            },
          ],
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
      ],
    },
    //     ],
    //   },
    // {
    //     path: '/404',
    //     element: <>404 - Page not found</>,

    // },
  ]);
};

export default RouterPage;
