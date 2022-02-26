import styled from 'styled-components'
import React, { useState } from 'react';

import { getRecipes } from '../recipe_data'
import RecipeList from './recipeList'
import SelectedRecipe from './selectedRecipe'

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
    <MainContainer>
      <RecipeList 
        recipes={recipes}
        handleClick={handleClick}  
      >
      </RecipeList>
       
       {onRecipeSelection(selectedRecipe)}

    </MainContainer>
  )
}

export default Recipes

const MainContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  border: black 3px;
  margin-left: 20%;
  margin-right: 20%;
`
