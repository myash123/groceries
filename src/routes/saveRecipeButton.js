import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'

const SaveRecipeButton = (props) => {
  
  const [a,b] = useState('')

  axios.defaults.baseURL = 'http://localhost:4000'
  
  const addRecipe = () => {

    const data = {
      "name": props.recipe.name,
      "amazonRef": props.recipe.amazonRef,
      "img": props.recipe.img,
      "description": props.recipe.description,
      "ingredients": props.recipe.ingredients,
      "instructions": props.recipe.instructions,
      "main_display": false,
      "saved": true,
    }

    axios.post("/save_recipe", data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
     }, 
    })
      .then(res => console.log(res))
      .then(res => console.log(data))
  }
  
  return <Button name="saveRecipe" value="add" onClick={addRecipe}>Save this recipe</Button>
}

export default SaveRecipeButton

const Button = styled.div`
  background-color: #4CAF50;
  height: 20px;
  border: none;
  color: white;
  padding: 10px;
  margin-top: 20px;
  margin-left: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`