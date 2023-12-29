import React, { useState } from 'react'
import { CartState } from '../context/Context'
// import CountContext from '../context/CountContext'

const Home = () => {

const {
  state: { products },
  
} = CartState();

console.log(products);
   
  return (
    <div>home</div>
  )
  
};

export default Home;