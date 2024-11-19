import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExampleCompo from "../example/ExampleCompo";
import FundamentalMenu from "../pages/fundamental/RoutingInReact/FundamentalMenu";

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
    element: <>
        <Navbar/>
        <h2>About</h2>
    </>,
  },
  {
    path: "/team",
    element: <>
        <Navbar/>
        <h2>Team</h2>
    </>,
  },
  {
    path: "/example",
    element: <>
        <Navbar/>
        <ExampleCompo/>
    </>,
    children: [
        {
            path: "/example/FundamentalMenu",
            element: <FundamentalMenu/>
        }
    ]
  },
]);

export default router;
