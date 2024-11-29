import React, {useEffect, useState} from 'react'

function CounterEffect() {

  const [count, setCount]  = useState(0)


  const increment = () => {
    setCount(count + 1)
  }


  // useEffect 

  useEffect(() => {
      console.log("Component Mounted " + count);
      
    return(() => {
      console.log("Clean Up ");
      
    })
    // 

  }, [count])


  return (
    <>
    <div className="container text-bg-dark p-3">
      <h1>Count = {count}</h1>
      <button className="btn btn-primary" onClick={increment}>Increment</button>
    </div>
    </>
  )
}

export default CounterEffect