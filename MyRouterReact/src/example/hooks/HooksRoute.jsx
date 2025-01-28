import React from 'react'
import { useRoutes } from 'react-router-dom'
import UnderstandingState from './useState/UnderstandingState'
import HooksMenu from './HooksMenu';
import UseEffectExplanation from './useEffect/UseEffectExplanation'
import UseReducerExplanation from './useReducer/UseReducerExplanation';
import ExplanationComp from './useCallbackuseMemo/ExplanationComp';
import QAComponent from './useContext/QAComponent';


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
        },
        {
          path: "useReducerExplanation",
          element: <UseReducerExplanation/>
        },
        {
          path: "explanationCompuseCallbackuseMemo",
          element: <ExplanationComp/>
        },
        {
          path: "qAComponent",
          element: <QAComponent/>
        }
      ]
    },
   
  ]);
  return routes
}

export default HooksRoutes