import React from 'react'
import { useRoutes } from 'react-router-dom'
import FundamentalsMenu from './FundamentalsMenu';
import IntroReact from './IntroReact';
import UnderstandingProps from './propsInReact/UnderstandingProps';
import EventsCompo from './EventsInReact/EventsCompo';
import ConditionInReact from './ConditionalRendering/ConditionInReact';
import ListInReact from './RenderingList/ListInReact';

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
        },
        {
          path: "eventsInReact",
          element: <EventsCompo/>
        },
        {
          path: "conditionInReact",
          element: <ConditionInReact/>
        },
        {
          path: "listInReact",
          element: <ListInReact/>
        }
      ]
    },
   
  ]);
  return routes
}

export default FundamentalRoutes