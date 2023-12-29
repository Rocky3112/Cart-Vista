import  { createContext, useContext, useReducer } from 'react'
import {  cartReducer, } from './Reducers';
// import { CountContext } from './CountContext';
const faker = require('faker');

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN_wobC2CRwmotxpr2XPt5XYctN9h5jl5Mw&usqp=CAU',
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

 

  return (
    <Cart.Provider value={{ state, dispatch, }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
  