import React from "react";
import UseReducerQuestions from "./UseReducerQuestions";
import UseReducerPracticalTask from "./UseReducerPracticalTask";
import CounterReducer from "./CounterReducer";

const UseReducerExplanation = () => {
  return (
    <div className="container text-dark bg-warning p-4">
      <h1>1. Introduction to the useReducer Hook</h1>
      <p>
        The <code>useReducer</code> hook is used to manage complex state logic in React. It is ideal for situations where state transitions are intricate and depend on multiple actions or complex updates. Unlike <code>useState</code>, which is often used for simple state management, <code>useReducer</code> offers a more structured way of managing state, especially when dealing with multiple variables that change in different ways.
      </p>
      <h2>Key Points:</h2>
      <ul>
        <li><strong>useReducer</strong> is used to manage more complex state logic, especially when the state updates depend on multiple actions or variables.</li>
        <li>It is based on a reducer function, which is similar to reducers in Redux or traditional JavaScript reducers.</li>
        <li>The reducer function receives the current state and an action, and it returns a new state based on the action type.</li>
        <li>This hook is typically preferred over <code>useState</code> when the logic for updating the state is more complex, such as managing arrays or objects with many properties.</li>
      </ul>
      <h2>Syntax:</h2>
      <pre>
        {`const [state, dispatch] = useReducer(reducer, initialState);`}
      </pre>
      <p>
        <strong>Reducer function:</strong> This function determines how the state changes based on the action.<br />
        <strong>Initial State:</strong> The initial state for the component before any actions are dispatched.<br />
        <strong>Dispatch function:</strong> A function that triggers state changes by dispatching actions to the reducer.
      </p>


      <div className="container text-light bg-danger py-4 my-3">
      <CounterReducer/>
        </div>
        <div className="container text-light bg-dark py-4 my-3">
            <UseReducerQuestions/>
        </div>
        <div className="container text-light bg-dark py-4 my-3">
          <UseReducerPracticalTask/>
        </div>
    </div>
  );
};

export default UseReducerExplanation;
