import React, { useEffect, useState } from "react";

function ToDoListRendering() {
  const [tasks, setTasks] = useState([]);


    useEffect(() => {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);
  return (
    <>
      <div className="container text-bg-dark p-4">
        <h1 className="text-center">List Rendering</h1>
        <div className="col">
          {/* Task List */}
          <div className="row mt-4">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <div className="row py-2" key={index}>
                  <div className="col-6">{task.text}</div>
                  <div className="col-6">
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
      </div>
    </>
  );
}

export default ToDoListRendering;
