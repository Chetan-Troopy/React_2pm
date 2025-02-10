import React from "react";
import FocusInput from "./FocusInput";
import QASectionUseRef from "./QASectionUseRef";
import PracticalTasksUseRef from "./PracticalTasksUseRef";
import PreviousState from "./PreviousState";
import Stopwatch from "./StopWatch";

function ExplanationUseRef() {
  return (
    <div className="container mt-4 text-bg-warning">
      <h2>What is useRef?</h2>
      <p>
        The <code>useRef</code> hook in React allows you to persist values 
        between renders without causing re-renders. It returns a mutable 
        object with a `.current` property.
      </p>
      <h4>Common Use Cases:</h4>
      <ul className="list-group">
        <li className="list-group-item">Accessing DOM elements (e.g., auto-focus input)</li>
        <li className="list-group-item">Storing previous state values</li>
        <li className="list-group-item">Keeping a persistent variable without re-renders</li>
        <li className="list-group-item">Handling timers in a functional component</li>
      </ul>
      <div className="container text-light bg-danger py-4 my-3">
          <FocusInput/>
        </div>
      <div className="container text-light bg-danger py-4 my-3">
          <PreviousState/>
        </div>
      <div className="container text-light bg-danger py-4 my-3">
          <Stopwatch/>
        </div>
        <div className="container text-light bg-dark py-4 my-3">
          <QASectionUseRef />
        </div>
        <div className="container text-light bg-dark py-4 my-3">
          <PracticalTasksUseRef />
        </div>
    </div>
  );
}

export default ExplanationUseRef;
