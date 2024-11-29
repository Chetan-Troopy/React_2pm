import React from "react";
import UseEffectDemo from "./UseEffectDemo";
import UseEffectQuestion from "./UseEffectQuestion";
import UseEffectPracticalTask from "./UseEffectPracticalTask";

const UseEffectExplanation = () => {
  return (
    <>
      <div className="container text-dark bg-warning p-3">
        <h1>1. Introduction to the useEffect Hook</h1>
        <p>
          The <code>useEffect</code> hook is a fundamental hook in React that
          allows you to perform side effects in functional components. Side
          effects are operations that can affect other parts of the application
          or the outside world, such as data fetching, subscriptions, or
          manually changing the DOM.
        </p>
        <h2>Key Points:</h2>
        <ul>
          <li>
            <strong>useEffect</strong> is called after the component renders.
          </li>
          <li>
            It runs the side effect (like fetching data, setting up timers, or
            updating the DOM) and can be triggered by specific dependencies.
          </li>
          <li>
            It allows you to manage lifecycle events in functional components
            (similar to <code>componentDidMount</code>,{" "}
            <code>componentDidUpdate</code>, and{" "}
            <code>componentWillUnmount</code> in class components).
          </li>
        </ul>
        <h2>Syntax:</h2>
        <pre>
          <code>
                {`useEffect(() => {{"\n" }}  // Code for side effect{"\n"}&#125;, [dependencies]); `}
              </code>
        </pre>
        <ul>
          <li>
            <strong>Callback function:</strong> This is the side effect code
            that will run after the render.
          </li>
          <li>
            <strong>Dependencies:</strong> Optional array specifying conditions
            for when the effect should run. If any value in the array changes,
            the effect will be triggered.
          </li>
        </ul>

        <h1>2. Basic useEffect Example</h1>
        <p>
          In the simplest case, <code>useEffect</code> runs after every render.
        </p>
        <pre>
          <code>{`
import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('Component rendered!'); // Logs to the console every time the component renders
  });

  const increment = () => {
    setCount(count + 1);
    };

    return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
    );
    }
    
    export default Counter;
    `}</code>
        </pre>

        <h1>3. Using useEffect for Side Effects Like Data Fetching</h1>
        <p>
          One of the most common uses of <code>useEffect</code> is for side
          effects like fetching data from an API when the component is mounted.
        </p>
        <pre>
          <code>{`
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetching data from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data); // Set the fetched data into the state
            setLoading(false); // Update the loading state
            });
            }, []); // Empty dependency array means this effect runs only once after the initial render
            
            if (loading) return <div>Loading...</div>;
            
            return (
                <div>
                <h1>Fetched Data:</h1>
      <ul>
        {data.map(item => (
            <li key={item.id}>{item.title}</li>
            ))}
            </ul>
            </div>
            );
            }
            
            export default DataFetchingComponent;
            `}</code>
        </pre>
        <h3>Explanation of Key Points:</h3>
        <ul>
          <li>
            The <code>useEffect</code> hook runs only once when the component is
            mounted because the dependency array is empty (<code>[]</code>).
          </li>
          <li>
            Data is fetched from an API using the <code>fetch</code> function,
            and once the data is available, the state is updated to display it.
          </li>
          <li>
            While the data is loading, a "Loading..." message is displayed.
          </li>
        </ul>

        <h1>4. Managing Cleanup in useEffect</h1>
        <p>
          You can also return a cleanup function from <code>useEffect</code>.
          This is useful for cleaning up resources like cancelling network
          requests or unsubscribing from subscriptions when the component is
          unmounted or the dependencies change.
        </p>
        <pre>
          <code>{`
import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1); // Update time every second
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs only once on mount and unmount

    return (
        <div>
        <h1>Time: {time}s</h1>
        </div>
  );
  }
  
  export default TimerComponent;
        `}</code>
        </pre>
        <h3>Explanation of Key Points:</h3>
        <ul>
          <li>
            The <code>setInterval</code> function starts a timer that updates
            the time every second.
          </li>
          <li>
            When the component unmounts, the <code>clearInterval</code> function
            is called to stop the timer and clean up resources.
          </li>
        </ul>

        <div className="container text-light bg-danger py-4 my-3">
          <UseEffectDemo />
        </div>
        <div className="container text-light bg-dark py-4 my-3">
          <UseEffectQuestion />
        </div>
        <div className="container text-light bg-dark py-4 my-3">
          <UseEffectPracticalTask />
        </div>
      </div>
    </>
  );
};

export default UseEffectExplanation;
