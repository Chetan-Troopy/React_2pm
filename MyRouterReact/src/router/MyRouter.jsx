import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Component/Navbar";
import ExampleCompo from "../pages/ExampleCompo";
import FundamentalRoutes from "../example/fundamentals/FundamentalsRoutes";

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
    path: "/example",
    element: <> <Navbar /> <ExampleCompo/></>,
    children: [
        {
            path: "fundamentals/*",
            element: <FundamentalRoutes/>
        }
    ]
  },
]);


export default router