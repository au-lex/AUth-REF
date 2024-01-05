import React from 'react'

import App from './App.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Admin from './Pages/Admin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/signup",
    element: <Signup />
  },

  {
    path: "/admin",
    element: <Admin />
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);