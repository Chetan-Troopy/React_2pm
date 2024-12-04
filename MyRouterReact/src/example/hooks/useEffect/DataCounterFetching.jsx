import React, { useEffect, useState } from "react";

function DataCounterFetching() {
  // useState

  const [data, setData] = useState([]);
const [count, setCount] = useState(1)
  // useEffect

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [count]);

  return (
    <>
      <div className="container text-bg-dark">
        <h1 className="text-center">Product Counter</h1>
        <div className="d-flex justify-content-between p-5">
          <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Prev</button>
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={data.image}
              style={{ height: "30%" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{data.title}</h5>
              <p class="card-text">{data.description}</p>
              <a href="#" class="btn btn-primary">
                {data.price}
              </a>
            </div>
          </div>
          <button className="btn btn-success" onClick={() => setCount(count + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}

export default DataCounterFetching;
