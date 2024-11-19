import React from "react";
import FundamentalMenu from "./FundamentalMenu";
import IntroReact from "../IntroReact/IntroReact";
import { useRoutes } from "react-router-dom";

function FundamentalRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <FundamentalMenu />,
      children: [
        {
          path: "IntroReact",
          element: <IntroReact />,
        },
      ],
    },
  ]);
  return routes;
}

export default FundamentalRoutes;
