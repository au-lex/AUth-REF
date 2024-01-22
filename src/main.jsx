import React from 'react';
import App from './App.jsx';
import './index.css';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Admin from './Pages/Admin.jsx';
import Profile from './Pages/Profile.jsx';
import Chat from './Pages/Chat.jsx';
import Upload from './Pages/Upload.jsx';
import Postdetails from './Pages/Postdetails.jsx';

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />
  },

  {
    path: "/admin",
    element: <Admin />,
  },

  {
    path: "/upload",
    element: <Upload />,
  },

  {
    path: "/chat",
    element: <Chat />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/postdetails/:Pdetails",
    element: <Postdetails />
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)