import React from "react";

function PracticalTasksUseRef() {
  const tasks = [
    "Create an input field that automatically gets focus on mount.",
    "Build a component that stores the previous state using useRef.",
    "Implement a stopwatch with start, stop, and reset.",
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-success">Practical Tasks</h3>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default PracticalTasksUseRef;
