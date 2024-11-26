import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function FundamentalsMenu() {
  return (
    <>
            <div className="container text-bg-danger p-3">
                <div className="row">
                    <div className="col">
                        <ol>
                            <li>
                                <Link className='text-light' to="introReact">Intro React</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="understandingProps">Props</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="eventsInReact">Events</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="conditionInReact">Conditional Rendering</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="listInReact">Rendering List</Link>
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

export default FundamentalsMenu