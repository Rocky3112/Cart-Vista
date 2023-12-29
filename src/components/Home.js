// import React, { useState } from 'react'
// import CountContext from '../context/CountContext'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';

const Home = () => {

const {
  state: { products },
  
} = CartState();

console.log(products);
   
  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
  
};

export default Home;