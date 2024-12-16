import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ProjectMenu() {
  return (
    <>
            <div className="container text-bg-danger p-3">
                <div className="row">
                    <div className="col">
                        <ol>
                            <li>
                                <Link className='text-light' to="toDoList">To-Do List</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="productCatelog">Product Catelog</Link>
                            </li>
                        
                           
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProjectMenu