import styled from 'styled-components'
import Recipes from './recipes' 
import React, { useEffect } from 'react'
import axios from 'axios'

// TODO: 
// Insert recipe data from GET into RecipeList object
// Create validation rules for database 

const Saved = () => {

  axios.defaults.baseURL = 'http://localhost:4000'

  const renderList = async () => {
    const response = await axios.get("/recipes")
    console.log(response.data[1])
  }
  
  return(
    <div onClick={renderList}>Hello</div>
  )
}

export default Saved

const SavedRecipesContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  border: black 3px;
  margin-left: 20%;
  margin-right: 20%;
`
