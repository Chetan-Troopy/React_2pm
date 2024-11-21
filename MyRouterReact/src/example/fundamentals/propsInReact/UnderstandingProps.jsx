import React from 'react'
import ParentComponent from './ParentComponent'

function UnderstandingProps() {
  return (
    <div>


        <div className="container text-bg-dark">
            <h1>Props In React</h1>
            <div className="row">
                <div className="col">
                    <ParentComponent/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UnderstandingProps