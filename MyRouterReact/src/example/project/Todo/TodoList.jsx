import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Task Add

  function handleTaskAdd() {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <>
      <div className="container text-bg-dark p-4">
        <h1 className="text-center">To-Do List</h1>
        <div className=" row">
          <div class="col-2 row">
            <label for="task" class="col col-form-label">
              Task : 
            </label>
            <div class="col-7">
              <input type="text" class="form-control" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            </div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={handleTaskAdd}>
              Add
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {tasks.map((task, index) => (
              <div className="row py-2">
                <div className="col-10" key={index}>
                  {task}
                </div>
                <div className="col-2">
                  <button className="btn btn-success me-2">Edit</button>
                  <button className="btn btn-danger ms-2">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
