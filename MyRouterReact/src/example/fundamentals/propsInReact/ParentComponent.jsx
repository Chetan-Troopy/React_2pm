import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  return (
    <>
        <div className="container text-bg-danger my-3 p-3">
            <h2>Parent Component</h2>

            <ChildComponent country="Bharat"/>
            <ChildComponent country="India"/>
            <ChildComponent country="USA"/>
            <ChildComponent country="Dubai"/>
            <ChildComponent country="Pakistan"/>
            <ChildComponent country="Nepal"/>
        </div>
    </>
  )
}

export default ParentComponent