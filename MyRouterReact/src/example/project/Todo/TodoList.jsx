import React, { useState } from "react";
import Weblayout from "./Weblayout";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Task Add
  function handleTaskAdd() {
    if (newTask) {
      setTasks([...tasks, { text: newTask }]);
      setNewTask("");
    }
  }

  // Remove Task
  function removeTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  // The first argument (_) represents the task itself, 
  // but it's not used here (hence the underscore is commonly used 
  // as a placeholder for unused arguments).



  // Edit Task
  function StartEdit(index) {
    setEditTask(tasks[index].text);
    setEditingIndex(index);
  }

  // Update Task
  function updateTask() {
    if (editTask.trim()) {
      const updatedTask = tasks.map((task, i) =>
        i === editingIndex ? { ...task, text: editTask } : task
      );

      setTasks(updatedTask);
      setEditTask("");
      setEditingIndex(null);
    }
  }

  return (
    <>
      <div className="container text-bg-dark p-4">
        <h1 className="text-center">To-Do List</h1>
        <div className="mb-4">
          <div className="col">
            <label htmlFor="task" className="col col-form-label">
              Task :
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Add Task Here"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary my-3" onClick={handleTaskAdd}>
              Add
            </button>
          </div>
        </div>

        {/* Edit Task  */}
        {editingIndex !== null && (
          <div>
            <input
              type="text"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              placeholder="Edit Task"
            />
            <button className="btn btn-success ms-2" onClick={updateTask}>
              Update
            </button>
          </div>
        )}

        {/* Task List */}
        <div className="row mt-4">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div className="row py-2" key={index}>
                <div className="col-10">{task.text}</div>
                <div className="col-2">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => StartEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => removeTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col text-center">No tasks available!</div>
          )}
        </div>
      </div>

      {/* Web Layout */}
      <div className="container text-bg-warning mt-4">
        <h1>Web Layout</h1>
        <Weblayout />
      </div>
    </>
  );
}

export default TodoList;
