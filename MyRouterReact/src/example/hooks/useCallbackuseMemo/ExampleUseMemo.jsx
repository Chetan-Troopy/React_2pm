import React, { useMemo, useState } from "react";

function ExampleUseMemo() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);

  // Memoizing the calculation of total price
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return items.reduce((acc, curr) => acc + curr, 0);
  }, [items]);
  return (
    <>
      <div>
        <h3>Total Price: {totalPrice}</h3>
        <button onClick={() => setItems([...items, items.length + 1])}>
          Add Item
        </button>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </>
  );
}

export default ExampleUseMemo;
