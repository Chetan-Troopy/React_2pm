import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ExampleCompo() {
  return (
    <>
        <div className="container text-bg-dark p-3">
            <h1>Example</h1>
            <div className="row">
                <div className="col">
                    <Link className='text-light py-3 text-decoration-none' to="/example/fundamentals">Fundamental</Link>
                </div>
                <div className="col">
                    <Link className='text-light py-3 text-decoration-none' to="/example/hooks">Hooks</Link>
                </div>
                <div className="col">
                    <Link className='text-light py-3 text-decoration-none' to="/example/projects">Projects</Link>
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

export default ExampleCompo