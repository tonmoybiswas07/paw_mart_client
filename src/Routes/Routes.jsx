import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import PetSupplies from "../Pages/PetSupplies/PetSupplies";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddListing from "../Pages/AddListing/AddListing";
import Error from "../Components/Error/Error";
import MyListing from "../Pages/MyListing/MyListing";
import MyOrders from "../Pages/MyOrders/MyOrders";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

import CategoryFilter from "../Layouts/CategoryCards/CategoryFilter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://paw-mart-server-two.vercel.app/martProducts"),
      },
      {
        path: "/petSupplies",
        element: <PetSupplies></PetSupplies>,
        loader: () =>
          fetch("https://paw-mart-server-two.vercel.app/martProducts"),
      },
      {
        path: "/addListing",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/mylisting",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/myorder",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/cardDetails/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://paw-mart-server-two.vercel.app/martProducts/${params.id}`
          ),
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryFilter></CategoryFilter>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);
export default router;
