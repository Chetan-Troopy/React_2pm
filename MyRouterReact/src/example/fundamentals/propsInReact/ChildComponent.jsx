import React from 'react'

// function ChildComponent(props) {
    function ChildComponent({country}) {
  return (
    <>
         <div className="col text-bg-warning my-3 p-3">
            <h2>{country}</h2>
            {/* <p>Namaste {props.country}</p> */}
            <p>Namaste {country}</p>
        </div>
    
    </>
  )
}

export default ChildComponent