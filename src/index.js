import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/layout';
import Login from './components/Login';
import Sign from './components/sign-up';
import AppHeader from './components/header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  
  {
    path: "/sign-up",
    element: <Sign />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
