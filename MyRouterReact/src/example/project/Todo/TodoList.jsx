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
        <div className="">
          <div class="col">
            <label for="task" className="col col-form-label">
              Task :
            </label>
            <div class="col">
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
            <button onClick={updateTask}>Update</button>
          </div>
        )}

        <div className="row">
          <div className="col">
            {tasks.map((task, index) => (
              <div className="row py-2">
                <div className="col-10" key={index}>
                  {task.text}
                </div>
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
            ))}
          </div>
        </div>
      </div>


      <div className="container text-bg-warning">
            <h1> Web Layout</h1>
            <Weblayout/>
      </div>
    </>
  );
}

export default TodoList;
