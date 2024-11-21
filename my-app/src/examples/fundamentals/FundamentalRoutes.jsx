import React from 'react';
import { useRoutes } from 'react-router-dom';
import FundamentalMenu from './FundamentalMenu';
import IntroReact from './IntroReact';
import PropsCompo from './PropsInReact/Props';

function FundamentalRoute() {
    const routes = useRoutes([
        {
            path: "/",  
            element: <FundamentalMenu />,  
            children: [
                {
                    path: "introReact",  
                    element: <IntroReact />,
                },
                {
                    path: "props",  
                    element: <PropsCompo />,
                },
            ],
        }
    ]);
    
    return routes;
}

export default FundamentalRoute;
