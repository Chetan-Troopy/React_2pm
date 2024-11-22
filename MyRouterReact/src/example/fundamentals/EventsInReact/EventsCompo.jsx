import React from 'react'

function EventsCompo() {
    // const handleEvent = () => {
    //      alert("Namaste Bharat")
    // }
    
  return (
    <>
    
        <div className="container text-bg-dark p-3">
            <h1>Events In React</h1>
            {/* <button className='btn btn-primary my-3' onClick={handleEvent}>Click Me</button> */}
            <button className='btn btn-primary my-3' onClick={ () => {alert("Namaste Bharat")}}>Click Me</button>

        </div>
    </>
  )
}

export default EventsCompo