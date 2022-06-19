import React from 'react';
import Product from './Product';
import '../products/products.css'

function Products({products}) {

  return (
    <div className='main__container container'>
      {products.map((product) => (
        <div className='main__product' key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default Products;