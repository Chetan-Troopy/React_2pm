import React from 'react';
import UseStateDemo from './UseStateDemo';
import UseStateQuestion from './UseStateQuestion';
import UseStatePracticalTask from './UseStatePracticalTask';

function UnderstandingState() {
  return (
    <div className='bg-warning text-dark p-3'>
      <h2>1. Understanding State in React</h2>
      <p>
        State is a built-in object in React that allows components to store and manage dynamic data. It determines how a component behaves and renders. When the state changes, the component automatically re-renders to reflect the updated data.
      </p>
      <ul>
        <li>State is used to make components dynamic and interactive.</li>
        <li>In class components, state is managed using <code>this.setState</code>.</li>
        <li>In functional components, state is managed using the <code>useState</code> hook.</li>
      </ul>

      <h2>2. What is useState?</h2>
      <p>
        <code>useState</code> is a React hook that allows functional components to have state. It provides a way to declare state variables and a function to update them.
      </p>
      <p>Syntax:</p>
      <code>
        const [state, setState] = useState(initialValue);
      </code>
      <ul>
        <li><code>state</code>: The current value of the state.</li>
        <li><code>setState</code>: A function used to update the state.</li>
        <li><code>initialValue</code>: The starting value of the state.</li>
      </ul>

      <h2>3. Example: Using useState in a Functional Component</h2>
      <p>You can use <code>useState</code> to manage dynamic data such as a counter.</p>
      <pre>
        <code>
{`
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

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
`}
        </code>
      </pre>
      <p>
        <b>How it Works:</b>
        <ul>
          <li>The <code>count</code> variable holds the current state.</li>
          <li>The <code>setCount</code> function updates the state.</li>
          <li>Clicking the button triggers the <code>increment</code> function, which increases the count by 1.</li>
        </ul>
      </p>

      <h2>4. Managing Multiple State Variables</h2>
      <p>You can use <code>useState</code> to manage multiple state variables within the same component.</p>
      <pre>
        <code>
{`
function UserProfile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>
        Hello, {name}! You are {age} years old.
      </p>
    </div>
  );
}
`}
        </code>
      </pre>

      <h2>5. Updating State Based on Previous State</h2>
      <p>
        Sometimes, you need to update the state based on its previous value. To ensure consistency, pass a function to <code>setState</code> instead of directly modifying the state.
      </p>
      <pre>
        <code>
{`
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
`}
        </code>
      </pre>

      <h2>6. Initializing State Dynamically</h2>
      <p>
        You can initialize the state dynamically by passing a function to <code>useState</code>. This is useful when the initial value requires computation.
      </p>
      <pre>
        <code>
{`
function App() {
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100));

  return <h1>Random Number: {randomNumber}</h1>;
}
`}
        </code>
      </pre>



      <div className="container text-light bg-danger py-4 my-3">
        <UseStateDemo/>
        </div>
        <div className="container text-light bg-dark py-4 my-3">
            <UseStateQuestion/>
        </div>
        <div className="container text-light bg-dark py-4 my-3">
            <UseStatePracticalTask/>
        </div>
    </div>
  );
}

export default UnderstandingState;
