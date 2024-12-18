import React from 'react'
import TodoWithLocalStorage from './TodoWithLocalStorage'
import ToDoListRendering from './ToDoListRendering'

function LocalStorageComp() {
  return (
    <>
        <div className="container text-bg-warning p-5">
            <h1 className='text-center'>Local Storage TASK</h1>
            <div className="row">
                <div className="col-6"><TodoWithLocalStorage/></div>
                <div className="col-6"><ToDoListRendering/></div>
            </div>
        </div>
    </>
  )
}

export default LocalStorageComp

