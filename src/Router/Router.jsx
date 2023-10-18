import {
    createBrowserRouter,
  } from "react-router-dom";

import App from "../App";
import Root from "../Root/Root";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
          {
              path: '/',
              element: <App></App>
          }
      ]
    },
  ]);
  export default Router