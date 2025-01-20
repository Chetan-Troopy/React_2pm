import React, { useMemo, useState } from "react";

function ExampleUseMemo() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);

  // 1,2,3,4, 5, 6, 7,8,9,10 = 55

  // Memoizing the calculation of total price
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return items.reduce((acc, curr) => acc + curr, 0);
  }, [items]);
  return (
    <>
      <div className="container py-3 text-bg-dark">
        <h3>Total Price: {totalPrice}</h3>  
        <h3>Total Count: {count}</h3>
        <button onClick={() => setItems([...items, items.length + 1])}>
          Add Item
        </button>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </>
  );
}

export default ExampleUseMemo;
