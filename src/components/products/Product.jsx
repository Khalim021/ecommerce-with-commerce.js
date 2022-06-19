import React from 'react';
import { BiCart } from "react-icons/bi";


function Product({product}) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="pubg" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>{product.year}</p>
        <div className='btn-style'>
          <button href="#" className="btn btn-secondary">Buy Now</button>
          <button className='btn btn-outline-success'><BiCart /></button>
        </div>
      </div>
    </div>
  );
}

export default Product;