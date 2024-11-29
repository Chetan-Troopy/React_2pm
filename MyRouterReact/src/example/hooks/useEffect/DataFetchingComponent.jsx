import React, { useEffect, useState } from "react";

function DataFetchingComponent() {
  // useState

  const [data, setData] = useState([]);

  // useEffect

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="container text-bg-dark">
        <h1>Product Listing With The Help of useEffect</h1>
        <div className="row">
          {data.map((e) => (
            <div className="col-3" key={e.id}>
              <div class="card" style={{width: "18rem;"}}>
                <img src={e.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{e.title.slice(0,30)}</h5>
                  <p class="card-text">{e.description.slice(0,50)}</p>
                  <a href="#" class="btn btn-primary">Price : {e.price}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DataFetchingComponent;
