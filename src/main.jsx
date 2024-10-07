import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';

import UserAuthProvider from './authProviders/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Root from './components/Root/Root';
import UserInfo from './components/UserInfo/UserInfo';
import './index.css';
import PrivateRoute from './Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/userInfo",
        element: <PrivateRoute><UserInfo /></PrivateRoute>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthProvider>
      <RouterProvider router={router} />
   </UserAuthProvider>
  </StrictMode>,
)
