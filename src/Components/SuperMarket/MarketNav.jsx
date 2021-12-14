import React from 'react'
import CategoryMenu from './CategoryMenu'



const MarketNav = (props) => {
  
  return (
    <nav>
      <h1>Super Market</h1>
      <CategoryMenu products={props.products} setProductCategory={props.setProductCategory}/>
      <button id="cart-button"></button>
    </nav>
  )
}

export default MarketNav