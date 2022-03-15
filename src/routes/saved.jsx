import styled from 'styled-components'
import Recipes from './recipes' 
import React, { useEffect } from 'react'
import axios from 'axios'

// TODO: 
// render recipes based on having a saved field in db

const Saved = () => {

  axios.defaults.baseURL = 'http://localhost:4000'

  return(
    <Recipes></Recipes>
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
