import React from 'react'
import { useRoutes } from 'react-router-dom'
import ProjectMenu from './ProjectMenu';
import TodoList from './Todo/TodoList';
import ProductCatelog from './SomeAdditional/ProductCatelog';


function ProjectRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <> <ProjectMenu/> </>,
      children: [
        {
          path: "toDoList",
          element: <TodoList/>
        },
        {
          path: "productCatelog",
          element: <ProductCatelog/>
        },
       
      ]
    },
   
  ]);
  return routes
}

export default ProjectRoutes