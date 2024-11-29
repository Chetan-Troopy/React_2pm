import React from "react";

const UseEffectPracticalTask = () => {
  return (
    <>
      <h1>Task: Build a Component that Fetches User Data</h1>
      <p>
        Objective: Create a functional component that fetches user data from a public API (such as{" "}
        <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noopener noreferrer">
          https://jsonplaceholder.typicode.com/users
        </a>) and displays a list of user names.
      </p>
      <h2>Instructions:</h2>
      <ol>
        <li>Use <code>useState</code> hook to manage the data and loading state.</li>
        <li>Use <code>useEffect</code> to fetch the data from the API when the component mounts.</li>
        <li>Display a loading message while the data is being fetched.</li>
        <li>Once the data is fetched, display the names of the users in a list.</li>
      </ol>
      <h2>Expected Output:</h2>
      <ul>
        <li>The component should initially show a "Loading..." message.</li>
        <li>Once the data is fetched, it should display a list of user names from the API.</li>
      </ul>
    </>
  );
};

export default UseEffectPracticalTask;
