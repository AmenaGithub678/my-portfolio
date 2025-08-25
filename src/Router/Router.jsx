import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Portfolio from "../Pages/Portfolio/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
        path: "/",
       element: <Home/>
    },
    {
    path: "about",
    Component: About,
    },
    {
    path: "service",
    Component: Service,
    },
    {
    path: "portfolio",
    Component: Portfolio,
    },
    ]
  },
]);

export default router;