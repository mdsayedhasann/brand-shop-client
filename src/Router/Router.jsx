import {
    createBrowserRouter,
  } from "react-router-dom";

import App from "../App";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import BrandItems from "../pages/BrandItems";
import PrivateRouter from "./PrivateRouter";
import SingleProduct from "../pages/SingleProduct";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
          {
              path: '/',
              element: <Home></Home>,
              loader: () => fetch('http://localhost:5000/brands')
          },
          {
              path: '/addproduct',
              element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter> ,
              loader: () => fetch('http://localhost:5000/brands')
          },
          {
              path: '/cart',
              element: <PrivateRouter><Cart></Cart></PrivateRouter>

          },
          {
              path: 'login',
              element: <Login></Login>
          },
          {
              path: '/register',
              element: <Register></Register>
          },
          {
              path: '/checkout',
              element: <Checkout></Checkout>
          }, 
          {
              path: `/brand/:id`,
              element: <BrandItems></BrandItems>,
              loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
          }, 
          {
              path: `/product/:id`,
              element: <PrivateRouter><SingleProduct></SingleProduct></PrivateRouter>,
              loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
          }
      ]
    },
  ]);
  export default Router