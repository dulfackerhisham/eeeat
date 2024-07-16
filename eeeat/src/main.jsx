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
import { Suspense } from 'react';
import { lazy } from 'react';
import Cart from './components/Cart.jsx';
// import Grocery from './components/Grocery.jsx'


const Grocery = lazy(() => import("./components/Grocery.jsx"));

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
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<><h1>the page is loading....</h1></>}> <Grocery /> </Suspense>)
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
