import React from "react";

function ExplanationUseMemo() {
  return (
    <>
      <div className="container text-bg-warning py-4">
        <h2>What is useMemo?</h2>
        <p>
          The `useMemo` hook is used to memoize a value, ensuring it is only
          recalculated when the dependencies change. This helps optimize
          performance by preventing unnecessary recalculations.
        </p>
        <p>
          It’s useful when you have an expensive calculation or transformation
          that you don’t want to repeat on every render.
        </p>
      </div> 
    </>
  );
}

export default ExplanationUseMemo;
