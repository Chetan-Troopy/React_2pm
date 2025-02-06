import React, { useState, useRef, useEffect } from "react";

function PreviousState() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <div className="container mt-4">
      <h3 className="text-warning">Previous State Value</h3>
      <h4>Current: {count}</h4>
      <h4>Previous: {prevCountRef.current}</h4>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousState;
