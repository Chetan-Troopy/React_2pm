import React from 'react'

function RenderingListPracticalTask() {
  return (
    <>
      <div>
      <h2>Practical Task: Render a List of Tasks</h2>
      <p><strong>Objective:</strong> Create a component that renders a list of tasks from an array of objects. Each task should have a title and description. Use the <code>key</code> prop correctly to ensure the list is rendered efficiently.</p>
      
      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Create an array of tasks. Each task should be an object containing the following properties:
          <ul>
            <li><strong>id:</strong> A unique identifier for the task.</li>
            <li><strong>title:</strong> The title of the task.</li>
            <li><strong>description:</strong> A brief description of the task.</li>
          </ul>
        </li>
        <li>Use the <code>map()</code> function to iterate through the tasks array and render each task as a list item (<code>&lt;li&gt;</code>).</li>
        <li>Assign the <code>key</code> prop to each <code>&lt;li&gt;</code> element using the task's unique <code>id</code>.</li>
        <li>Display the task’s <strong>title</strong> and <strong>description</strong> in each list item.</li>
      </ol>

      <p><strong>Expected Output:</strong></p>
      <ul>
        <li>The tasks should be displayed as a list with titles and descriptions.</li>
        <li>Each task should have a unique <code>key</code> prop for efficient rendering.</li>
      </ul>
    </div>
    </>
  )
}

export default RenderingListPracticalTask