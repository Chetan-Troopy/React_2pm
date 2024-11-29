import React, { useState } from 'react';

function CounterWithPreviousState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button onClick={increment} className="btn btn-success">
        Increment Safely
      </button>
    </div>
  );
}

export default CounterWithPreviousState;
