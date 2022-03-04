import styled from 'styled-components'
import RecipeList from './recipeList' 
import React, { useEffect } from 'react'
import axios from 'axios'

// TODO: 
// Insert recipe data from GET into RecipeList object
// Create validation rules for database 
// Fix amazon reference prop

const Saved = () => {

  axios.defaults.baseURL = 'http://localhost:4000'

  const getSavedRecipes = () => {
    axios.get("/recipes")
      .then(response => {
        console.log(response.data)
      })
      .catch((error) => console.log(error))    
  }

  useEffect(() => {
    getSavedRecipes();
  }, [])
  
  return(
    <div> hello </div>
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
