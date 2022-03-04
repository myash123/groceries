import styled from 'styled-components'
import React, { useState } from 'react';
import { getRecipes } from '../recipe_data'
import RecipeList from './recipeList'
import SelectedRecipe from './selectedRecipe'

const Recipes = (props) => {

  const [selectedRecipe, setSelectedRecipe] = useState('');

  const handleClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  const onRecipeSelection = (selectedRecipe) => {
    if(selectedRecipe) {
      return <SelectedRecipe recipe={selectedRecipe}></SelectedRecipe>
    }
  }

  return (
    <MainContainer>
      <RecipeList 
        recipes={props.recipes}
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
  border: black 3px;
  margin-left: 20%;
  margin-right: 20%;
`
