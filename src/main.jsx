/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader.jsx";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const Products = lazy(() => import("./pages/admin/Products"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/customer",
        element: <Customers />,
      },
      {
        path: "/admin/product",
        element: <Products />,
      },
      {
        path: "/admin/transaction",
        element: <Transaction />,
      },

    // Charts




    
    // Apps
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>
);
