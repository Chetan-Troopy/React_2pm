import React from "react";
import CounterEffect from './CounterEffect';
import DataFetchingComponent from './DataFetchingComponent';


function UseEffectDemo() {
  return (
    <>
      <div>
        <h1>useEffect Examples</h1>
        <CounterEffect />
        <hr />
        <DataFetchingComponent />
        <hr />
      </div>
    </>
  );
}

export default UseEffectDemo;
