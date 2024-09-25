import React from 'react'
import App from './routes/App';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import OrthoRoute from './routes/OrthoRoute';
import Botox from './routes/Botox';
import Location from './routes/Location';
// import HomeCoponent from './components/HomeCoponent';
import HomeServices from './routes/HomeServics'
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },{
      path: "/Ortho",
      element: <OrthoRoute/>
    },
    {
      path: "/Botox",
      element: <Botox/>
    },
    {
      path : '/location',
      element : <Location/>
    },{
      path : '/homeServices',
      element : <HomeServices/>
    }
  ]);
  export default router