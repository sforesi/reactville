import React from 'react'
import '../../styles/burger.css'
import { useState } from 'react'
import { ingredients } from '../../data/burger-data'
import  BurgerStack  from './BurgerStack'
import  IngredientList  from './IngredientList'


const BurgerShop = () => {
  console.log(ingredients)
  
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  } 

  const removeFromBurger = (idx) => {
    return(
      setStack(stack.filter((i) => i !== idx))
    )
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        < IngredientList 
          stack={stack} 
          addToBurger={addToBurger}
        />

        < BurgerStack
          ingredients={ingredients}
          removeFromBurger={removeFromBurger}
        />
      </section>
    </div>
  )
}

export default BurgerShop