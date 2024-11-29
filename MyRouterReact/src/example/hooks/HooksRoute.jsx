import React from 'react'
import { useRoutes } from 'react-router-dom'
import UnderstandingState from './useState/UnderstandingState'
import HooksMenu from './HooksMenu';
import UseEffectExplanation from './useEffect/UseEffectExplanation'


function HooksRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <> <HooksMenu/> </>,
      children: [
        {
          path: "understandingState",
          element: <UnderstandingState/>
        },
        {
          path: "useEffectExplanation",
          element: <UseEffectExplanation/>
        }
      ]
    },
   
  ]);
  return routes
}

export default HooksRoutes