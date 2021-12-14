import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul>
		{props.ingredients.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            idx={idx}
            ingredient={ingredient}
            isList={true}
            addToBurger={props.addToBurger}
          />
        ))
      }
		</ul>
	)
}

export default IngredientList