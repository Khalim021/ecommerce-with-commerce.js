import React from 'react';
import Product from './Product';
import '../products/products.css'

const products = [
  {id: 1, name: 'PUBG MOBILE', description: 'Lorem ipsum hehe oldboy', year: 2018, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfhs8JSdsnu5ygNzdiPHdSTQLFtneiqqyssJSLO8EemqbSK1hdkojlqtmgDHzRFm7GjA&usqp=CAU'},
  {id: 2, name: 'APEX LEGANDS', description: 'Lorem ipsum hehe oldboy', year: 2019, image: 'https://www.theloadout.com/wp-content/uploads/2022/03/apex-legends-control-return-date-900x506.jpg'},
  {id: 3, name: 'CALL OF DUTY', description: 'Lorem ipsum hehe oldboy', year: 2018, image: 'https://themediaverse.com/wp-content/uploads/2022/04/WZ-Season-Three-Announce-TOUT.jpeg'},
  {id: 4, name: 'MOBILE LEGANDS', description: 'Lorem ipsum hehe oldboy', year: 2016, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eNMkETKxSlRA2dxIvaoAGarkFognj9HRGA&usqp=CAU'},
]


function Products() {

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