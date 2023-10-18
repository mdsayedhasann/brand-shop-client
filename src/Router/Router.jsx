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

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
              path: '/addproduct',
              element: <AddProduct></AddProduct>
          },
          {
              path: '/cart',
              element: <Cart></Cart>

          },
          {
              path: 'login',
              element: <Login></Login>
          },
          {
              path: '/register',
              element: <Register></Register>
          }
      ]
    },
  ]);
  export default Router