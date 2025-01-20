import React, { useCallback, useState } from "react";

function ParentComponentUseCallback() {
  const [count, setCount] = useState(0);

  // Memoizing the function to handle button click
  // useCallback ensures this function doesn't get recreated unless count changes 
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);


  // handleClick will not recreated on every render  
  // unless the count state changes (since the useCallback is memoizes it)


  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <ChildComponent onClick={handleClick} />

        {/* ChildComponent will not be re-render unnesseceraily 
        if handleClick stays the same, because the onClick prop is memoized */}
      </div>
    </>
  );
}

function ChildComponent({onClick}) {
  console.log('Child Component');
  return <button onClick={onClick}>Click Me</button>
  
  
}

export default ParentComponentUseCallback;
