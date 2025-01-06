import React from "react";

function ChildComponentUseCallback({onClick}) {
  console.log("ChildComponent rendered");
  return (
    <>
      <h3>I am a child component</h3>
      <button onClick={onClick}>Click Me</button>
    </>
  );
}

export default ChildComponentUseCallback;
