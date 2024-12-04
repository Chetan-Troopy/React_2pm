import React from "react";
import CounterEffect from './CounterEffect';
import DataFetchingComponent from './DataFetchingComponent';
import DataCounterFetching from "./DataCounterFetching";


function UseEffectDemo() {
  return (
    <>
      <div>
        <h1>useEffect Examples</h1>
        <CounterEffect />
        <hr />
        <DataFetchingComponent />
        <hr />
        <DataCounterFetching/>
        <hr />
      </div>
    </>
  );
}

export default UseEffectDemo;
