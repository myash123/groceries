import styled from 'styled-components'
import React, { useState } from 'react';

import { getRecipes } from '../recipe_data'
import RecipeRow from './recipeRow'
import SelectedRecipe from './selectedRecipe'

const Container = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-around;
  border: black 3px;
  margin-left: 20%;
  margin-right: 20%;
  padding: 5px;
`

const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  cursor: pointer;
  overflow: scroll;
  max-height: 800px;
`

const Recipes = () => {

  const [selectedRecipe, setSelectedRecipe] = useState('');
  
  const handleClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  const onRecipeSelection = (selectedRecipe) => {
    if(selectedRecipe) {
      return <SelectedRecipe recipe={selectedRecipe}></SelectedRecipe>
    }
  }

  const recipes = getRecipes()

  return (
    <Container>
      <RecipeList>      
        {recipes.map((recipe) => 
           <RecipeRow
             recipe={recipe}
             key={recipe.id}           
             handleClick={handleClick}
           ></RecipeRow>
        )}
       </RecipeList>
       {onRecipeSelection(selectedRecipe)}
    </Container>
  )
}

export default Recipes