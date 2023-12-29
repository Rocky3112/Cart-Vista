// import React, { useState } from 'react'
// import CountContext from '../context/CountContext'
import { CartState } from '../context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import '../App.css'

const Home = () => {

const {
  state: { products },
  
} = CartState();

console.log(products);
   
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
  
};

export default Home;