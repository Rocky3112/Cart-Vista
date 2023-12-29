import React from 'react'

const SingleProduct = ({prod}) => {
    // console.log(prod);
  return (
    <div>SingleProduct
        <img src={prod?.image} alt="" />
    </div>
  )
}

export default SingleProduct