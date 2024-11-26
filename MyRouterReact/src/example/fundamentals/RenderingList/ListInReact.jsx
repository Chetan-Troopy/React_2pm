import React from 'react'
import ListDemo from './ListDemo'
import RenderingListQuestion from './RenderingListQuestion'
import RenderingListPracticalTask from './RenderingListPracticalTask'

function ListInReact() {
  return (
    <>
         <div className="container text-dark bg-warning p-3">
      <h1>1. Rendering Lists in React using the map() function</h1>
      <p>
        In React, lists of elements are often rendered dynamically based on an
        array of data. To render a list, you can use JavaScript’s map() function
        to iterate over an array and return a list of elements.
      </p>
      <pre>
        {`function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`}
      </pre>

      <h1>2. Importance of the key Prop for Performance</h1>
      <p>
        React uses the key prop to identify which items in the list have
        changed, been added, or removed. The key helps React efficiently update
        the DOM by only re-rendering the elements that have changed, rather than
        re-rendering the entire list. It is crucial for performance, especially
        when dealing with dynamic data.
      </p>
      <p>
        <strong>Why use keys?</strong>
      </p>
      <ul>
        <li>
          Performance: React uses keys to identify which items are changed,
          added, or removed. This helps in minimizing re-renders and ensures
          that only necessary updates are made.
        </li>
        <li>
          Correctness: Without keys, React may misidentify which elements have
          changed, causing issues with maintaining state or animation effects.
        </li>
      </ul>

      <pre>
        {`function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item}>{item}</li>  {/* Use unique key (e.g., item itself) */}
      ))}
    </ul>
  );
}`}
      </pre>

      <h1>3. Why Shouldn't We Use the Index as Key?</h1>
      <p>
        While it is technically possible to use the array index as the key, it
        can cause problems when the list changes (e.g., items are added or
        removed). Using the index as the key may result in incorrect behavior,
        especially in dynamic lists with changes in order.
      </p>
      <h2>Example Issue with Index as Key:</h2>
      <pre>
        {`If we use the index as a key, React may reuse elements incorrectly when the list is modified (e.g., items are reordered or removed).`}
      </pre>

      <h1>4. Best Practices for Keys</h1>
      <p>
        <strong>Uniqueness:</strong> Each key should be unique among sibling
        elements in a list. It should help React identify which items have
        changed, been added, or removed.
        <br />
        <strong>Consistency:</strong> Use stable, unique identifiers (e.g.,
        database IDs) when possible, rather than relying on array indexes.
      </p>

      <pre>
        {`function ItemList() {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>  {/* Use unique ID as key */}
      ))}
    </ul>
  );
}`}
      </pre>

      <div className="container text-light bg-danger py-4 my-3">
        <ListDemo />
      </div>
      <div className="container text-light bg-dark py-4 my-3">
        <RenderingListQuestion />
      </div>
      <div className="container text-light bg-dark py-4 my-3">
        <RenderingListPracticalTask />
      </div>
    </div>
    </>
  )
}

export default ListInReact