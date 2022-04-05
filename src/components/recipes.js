import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeList from './recipeList'
import SelectedRecipe from './selectedRecipe'
import queryRecipes from '../server/db_helper'
import NavBar from './navbar'

function Recipes (props) {

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
    <Container>
      <NavBar />
      <RecipeContainer>
        <RecipeList 
          recipes={list}
          handleClick={handleClick}
        >
        </RecipeList>
        
        {onRecipeSelection(selectedRecipe)}
      </RecipeContainer>
    </Container>
  )
}

export default Recipes

const RecipeContainer = styled.div`
  display: flex; 
  flex-direction: row;
  border: black 3px;
  margin-left: 20%;
  margin-right: 20%;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
