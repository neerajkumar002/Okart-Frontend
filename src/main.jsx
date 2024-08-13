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

const Bar = lazy(() => import("./pages/admin/Bar.jsx"));
const Pie = lazy(() => import("./pages/admin/Pie.jsx"));
const Line = lazy(() => import("./pages/admin/Line.jsx"));


const Stopwatch = lazy(() => import("./pages/admin/Stopwatch.jsx"));
const Coupan = lazy(() => import("./pages/admin/Coupan.jsx"));
const Toss = lazy(() => import("./pages/admin/Toss.jsx"));


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

      {
        path: "/admin/chart/bar",
        element: <Bar />,
      },
      {
        path: "/admin/chart/pie",
        element: <Pie />,
      },
      {
        path: "/admin/chart/line",
        element: <Line />,
      },

      // Apps
      {
        path: "/admin/app/stopwatch",
        element: <Stopwatch />,
      },
      {
        path: "/admin/app/coupan",
        element: <Coupan />,
      },
      {
        path: "/admin/app/toss",
        element: <Toss />,
      },
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
