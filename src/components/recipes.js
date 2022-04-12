import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import RecipeList from './recipeList'
import SelectedRecipe from './selectedRecipe'
import queryRecipes from '../server/db_helper'
import NavBar from './navbar'

function Recipes (props) {

  /**
    1. Selected recipe state (right pane)
    2. State for listed recipes (left pane)
  **/

  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [list, setList] = useState([])
  const { route } = props

  //Sets the selected recipe on click event
  const handleClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  //List of recipes is generated based on route provided then loaded into state 
  useEffect(() => { 
    if(route !== "/recipes/user/?recipe=") {
      // console.log(route)
      const setRecipes = async () => {
        const newList = []    
        const res = await queryRecipes(route)
        const data = res.data
        console.log(data)
        newList.push(data)
        setList(data)
      }

      if(list != []) {
        setRecipes()
      }
    }
  }, [route])

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
  margin: 0 auto;
  margin-top: 1rem;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
