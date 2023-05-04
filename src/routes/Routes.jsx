import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/Registration/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chefs")
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <Registration />,
      },
    ],
  },
]);
