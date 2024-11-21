import React from 'react';
import { useRoutes } from 'react-router-dom';
import HooksMenu from './HooksMenu';
import UnderstandingHooks from './UnderstandingHooks';


function HooksRoute() {
    const routes = useRoutes([
        {
            path: "/",  
            element: <HooksMenu/>,  
            children: [
                {
                    path: "understandinghooks",  
                    element: <UnderstandingHooks/>,
                },
               
            ],
        }
    ]);
    
    return routes;
}

export default HooksRoute;
