import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <div>header</div>
        <Outlet />
      <div>foooter</div>
    </div>,
    errorElement: <div>error</div>,

    children: [
      {
        path: "/",
        element: <div>main</div>,
      },
      {
        path: "posts",
        element: <div>posts</div>,
      },
      {
        path: "aboutUs",
        element: <div>about us</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
