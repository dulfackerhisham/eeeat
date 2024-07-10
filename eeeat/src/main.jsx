// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from '../src/components/Body.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from '../src/components/About.jsx'
import Error from './components/Error.jsx';
import Contact from '../src/components/Contact.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx'




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
