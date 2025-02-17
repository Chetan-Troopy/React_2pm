import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function HooksMenu() {
  return (
    <>
            <div className="container text-bg-danger p-3">
                <div className="row">
                    <div className="col">
                        <ol>
                            <li>
                                <Link className='text-light' to="understandingState">useState</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="useEffectExplanation">useEffect</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="useReducerExplanation">useReducer</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="explanationCompuseCallbackuseMemo">useCallback & useMemo</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="qAComponent">QA</Link>
                            </li>
                            <li>
                                <Link className='text-light' to="explanationUseRef">UseRef</Link>
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

export default HooksMenu