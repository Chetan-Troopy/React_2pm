import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExampleCompo from "../pages/ExampleCompo";
import FundamentalRoute from "../examples/fundamentals/FundamentalRoutes";
import HooksRoute from "../examples/hooks/HooksRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <h2>Home</h2>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <h2>About</h2>
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Navbar />
        <h2>Team</h2>
      </>
    ),
  },
  {
    path: "/examples",
    element: (
      <>
        <Navbar />
        <ExampleCompo />
      </>
    ),
    children: [
      {
        path: "fundamentals/*",
        element: <FundamentalRoute/>
      },
      {
        path: "hooks/*",
        element: <HooksRoute/>
      },
    ],
  },
]);

export default router;
