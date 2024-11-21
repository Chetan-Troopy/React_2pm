import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ExampleCompo() {
  return (
    <>
        <div className="container">
            <h1>Example</h1>
            <div className="row">
                <div className="col">
                    <Link to="/example/fundamentals">Fundamental</Link>
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