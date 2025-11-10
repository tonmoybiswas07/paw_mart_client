import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import PetSupplies from "../Pages/PetSupplies/PetSupplies";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/petSupplies",
        Component: PetSupplies,
      },
    ],
  },
]);
export default router;
