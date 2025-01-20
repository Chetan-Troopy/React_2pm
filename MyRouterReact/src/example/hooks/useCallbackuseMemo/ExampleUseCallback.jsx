import React, { useCallback, useState } from 'react'
import ChildComponentUseCallback from './ChildComponentUseCallback';

function ExampleUseCallback() {

    const [count, setCount] = useState(0);

    // Memoizing the function to handle button click
    const handleClick = useCallback(() => {
      console.log("Button clicked!");
    }, []);
  return (
    <>
     <div className='container py-3 text-bg-dark'>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <ChildComponentUseCallback onClick={handleClick} />
    </div>
    </>
  )
}

export default ExampleUseCallback