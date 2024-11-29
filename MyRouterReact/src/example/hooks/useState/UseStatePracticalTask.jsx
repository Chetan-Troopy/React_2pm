import React from "react";

const UseStatePracticalTask = () => {
  return (
    <>
      <h1>Task: Create a Toggle Button Using State</h1>
      <p>
        Objective: Build a functional component that displays "ON" or "OFF" based on a button click. The initial state should be "OFF."
      </p>
      <h2>Instructions:</h2>
      <ol>
        <li>Use <code>useState</code> to create a toggle state initialized to <code>false</code>.</li>
        <li>Create a button that toggles the state between <code>true</code> and <code>false</code> when clicked.</li>
        <li>Display "ON" when the state is <code>true</code> and "OFF" when the state is <code>false</code>.</li>
      </ol>
      <h2>Expected Output:</h2>
      <ul>
        <li>Initially, the button displays "OFF."</li>
        <li>Clicking the button toggles the text between "ON" and "OFF."</li>
      </ul>
    </>
  );
};

export default UseStatePracticalTask;
