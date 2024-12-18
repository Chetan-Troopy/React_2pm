import React from 'react'
import { useRoutes } from 'react-router-dom'
import ProjectMenu from './ProjectMenu';
import TodoList from './Todo/TodoList';
import ProductCatelog from './SomeAdditional/ProductCatelog';
import TodoWithLocalStorage from './Todo/TodoWithLocalStorage';
import LocalStorageComp from './Todo/LocalStorageComp';


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
          path: "localStorageComp",
          element: <LocalStorageComp/>
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