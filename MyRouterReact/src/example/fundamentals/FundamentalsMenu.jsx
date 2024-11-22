import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function FundamentalsMenu() {
  return (
    <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ol>
                            <li>
                                <Link to="introReact">Intro React</Link>
                            </li>
                            <li>
                                <Link to="understandingProps">Props</Link>
                            </li>
                            <li>
                                <Link to="eventsInReact">Events</Link>
                            </li>
                            <li>
                                <Link to="conditionInReact">Conditional Rendering</Link>
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