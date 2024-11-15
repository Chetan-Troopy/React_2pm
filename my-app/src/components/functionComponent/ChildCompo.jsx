import React from 'react'

// function ChildCompo(props) {     // Normal Way 
    function ChildCompo({name, age, onClick}) {  // Destructuring of props   
  return (
    <>

        {/* <h1>My Name Is {props.name} And I'm {props.age} Year Old.</h1> */}
        <h1>My Name Is {name} And I'm {age} Year Old.</h1>
        <button className='btn btn-primary' onClick={onClick}>Greet From Parent Component</button>
    </>
  )
}

export default ChildCompo



