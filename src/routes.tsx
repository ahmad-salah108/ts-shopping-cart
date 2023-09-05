import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import About from './pages/about/About';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "store",
        element: <Store/>,
      },
      {
        path: "about",
        element: <About/>,
      },
    ]
  },
])