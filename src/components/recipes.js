import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import RecipeList from './recipeList'
import SelectedRecipe from './selectedRecipe'
import queryRecipes from '../server/db_helper'

const Recipes = (props) => {

  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [list, setList] = useState([])

  const handleClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  useEffect(() => { 
    const setRecipes = async () => {
      const newList = await queryRecipes(props.route)
      setList(newList.data)
    }
    setRecipes()
  }, [])

  const onRecipeSelection = (selectedRecipe) => {
    if(selectedRecipe) {
      return <SelectedRecipe recipe={selectedRecipe}></SelectedRecipe>
    }
  }

  return (
    <MainContainer>
      <RecipeList 
        recipes={list}
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
