import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './index.css'
import Header from './components/layouts/header/header.jsx';
import Home from './routes/home.jsx';
import Footer from './components/layouts/footer/footer';
import Posts from './routes/posts';
import AboutUS from './routes/aboutUS';
import AplicationError from './components/errors/aplicationError';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Header />
        <div className='m-20'>
          <Outlet />
        </div>
      <Footer />
    </div>,
    errorElement: <AplicationError /> ,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Posts />,
      },
      {
        path: "aboutUs",
        element: <AboutUS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
