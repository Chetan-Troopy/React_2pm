import React from 'react'
import { useRoutes } from 'react-router-dom'
import ProjectMenu from './ProjectMenu';
import TodoList from './Todo/TodoList';


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
       
      ]
    },
   
  ]);
  return routes
}

export default ProjectRoutes