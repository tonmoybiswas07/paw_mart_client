import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import PetSupplies from "../Pages/PetSupplies/PetSupplies";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/petSupplies",
        element: <PetSupplies></PetSupplies>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
