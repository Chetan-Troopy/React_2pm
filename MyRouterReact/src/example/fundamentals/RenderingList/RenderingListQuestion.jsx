import React from 'react';

function RenderingListQuestion() {
  return (
    <div>
      <h1>React List Rendering Quiz</h1>

      <h2>Q1: What is the role of the key prop in React lists?</h2>
      <p>
        A: The key prop helps React identify which items in a list have changed, been added, or removed.
        It improves performance by ensuring that only necessary elements are re-rendered.
      </p>

      <h2>Q2: Can you use the index of an array as the key in React? Why or why not?</h2>
      <p>
        A: While you can use the index as a key, it’s not recommended because it can cause issues when the list changes 
        (items are added, removed, or reordered). React may incorrectly reuse elements, causing bugs.
      </p>

      <h2>Q3: What happens if you don’t provide a key prop for list items in React?</h2>
      <p>
        A: If you don’t provide a key, React will issue a warning and will not be able to efficiently track the changes in the list. 
        It might result in unnecessary re-renders, reducing performance.
      </p>

      <h2>Q4: How does React optimize rendering lists of elements?</h2>
      <p>
        A: React optimizes list rendering by using the key prop to identify which elements have changed. 
        It only re-renders the elements that need to be updated, rather than the entire list.
      </p>

      <h2>Q5: What should be used as the key prop if an array of objects is being rendered?</h2>
      <p>
        A: The key should be a unique, stable identifier for each object in the array, such as an id field. 
        This ensures that React can track the objects properly during updates.
      </p>
    </div>
  );
}

export default RenderingListQuestion;
