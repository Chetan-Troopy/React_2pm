import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function FundamentalMenu() {
  return (
    <>
          <div className="container">
            <ol>
              <li><Link className='text-white' to="IntroReact">Introduction Of React</Link></li>
              <li>JSX Of React</li>
              <li>Components In React</li>
              <li>Props In React</li>
              <li>Style In React</li>
            </ol>

            <div className="row text-bg-warning">
              <div className="col">
                <Outlet/>
              </div>
            </div>
          </div>
    </>
  )
}

export default FundamentalMenu