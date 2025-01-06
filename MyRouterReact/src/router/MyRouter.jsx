import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import Navbar from "../Component/Navbar";
import ExampleCompo from "../pages/ExampleCompo";
import FundamentalRoutes from "../example/fundamentals/FundamentalsRoutes";
import HooksRoutes from "../example/hooks/HooksRoute";
import ProjectRoutes from "../example/project/ProjectRoute";
import WeatherApp from "../Task/WeatherApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Navbar /> <h2>Home</h2></>,
  },
  {
    path: "/about",
    element: <> <Navbar /> <h2>About</h2></>,
  },
  {
    path: "/weather",
    element: <> <Navbar /> <WeatherApp/></>,
  },
  {
    path: "/example",
    element: <> <Navbar /> <ExampleCompo/></>,
    children: [
        {
            path: "fundamentals/*",
            element: <FundamentalRoutes/>
        },
        {
            path: "hooks/*",
            element: <HooksRoutes/>
        },
        {
            path: "projects/*",
            element: <ProjectRoutes/>
        }
    ]
  },
]);


export default router



