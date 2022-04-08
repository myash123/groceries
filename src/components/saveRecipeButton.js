import styled from 'styled-components'
import axios from 'axios'

function SaveRecipeButton (props) {
  
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
  }
  
  return <Button name="saveRecipe" value="add" onClick={addRecipe}>Save this recipe</Button>
}

export default SaveRecipeButton

const Button = styled.div`
  background-color: #fffdf1;
  border: 1px solid black;
  border-radius: 20px;
  color: 0d1010;
  padding: .75rem;
  margin: 1rem 1rem 0 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end;
`