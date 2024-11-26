import React from "react";
import { ProductData } from "./ProductData";

function ListObjectCompo() {
  const products = ProductData.map((product, i) => (
    <div className="col"  key={product.id}>

    <div className="card text-center" style={{ width: "12rem"}}>
      <img src={product.image} className="card-img-top"  style={{width: "100px", margin: "auto"}}  alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title.slice(0,20)}</h5>
        <p className="card-text">
            {product.description.slice(0,50)}
        </p>
        <a href="#" className="btn btn-primary">
          {product.price}
        </a>
      </div>
    </div>
    </div>
  ));

  return (
    <>
      <div className="container text-bg-dark p-5">
        <div className="row gap-4">
            {products}
        </div>
      </div>
    </>
  );
}

export default ListObjectCompo;
