import React from 'react'
import { useRoutes } from 'react-router-dom'
import FundamentalsMenu from './FundamentalsMenu';
import IntroReact from './IntroReact';
import UnderstandingProps from './propsInReact/UnderstandingProps';

function FundamentalRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <> <FundamentalsMenu/> </>,
      children: [
        {
          path: "introReact",
          element: <IntroReact/>
        },
        {
          path: "understandingProps",
          element: <UnderstandingProps/>
        }
      ]
    },
   
  ]);
  return routes
}

export default FundamentalRoutes