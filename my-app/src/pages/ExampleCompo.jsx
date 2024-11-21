import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ExampleCompo() {
  return (
    <>
        <div className="container text-bg-dark p-3 ">
            <div className="row pb-3">
                <h2 className='text-center'>This Is My Tutorial</h2>
            </div>
            <div className="row">
                <div className="col-6">
                    <Link to="/examples/fundamentals">Fundamentals Of React</Link>
                </div>
                <div className="col-6">
                <Link to="/examples/hooks">Hooks In React</Link>
                </div>
            </div>


            <div className="row text-bg-danger my-3 py-3">
                <div className="col">
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExampleCompo