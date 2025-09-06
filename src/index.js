import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from './pagers/About';
import Signin from './pagers/About';
import Register from './pagers/Register';
import Contactus from './pagers/Contactus';
import Achievements from './pagers/Achievements';
import Gallery from './Gallery';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "About",
    element: <About/>
  },
  {
    path:"Register",
    element:<Register/>
  },
  {
    path:"Contactus",
    element:<Contactus/>
  },
  {
    path:"Achievements",
    element:<Achievements/>
  },
  {
  path:"Gallery",
  element:<Gallery/>
  },
]);

root.render(
  
    <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
