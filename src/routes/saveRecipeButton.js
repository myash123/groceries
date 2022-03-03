import styled from 'styled-components'
import axios from 'axios'

const SaveRecipeButton = (props) => {
  const addRecipe = () => {

    const recipe = {
      "name": props.recipe.name,
      "amazon_reference": props.recipe.amazon_reference,
      "description": props.recipe.description,
      "ingredients": props.recipe.ingredients,
      "instructions": props.recipe.instructions
  }
    axios.post("localhost:4000/save_recipe", recipe)
      .then(res => console.log(res.data))
  }
  return <Button name="saveRecipe" value="add" onClick={addRecipe}>Save this recipe</Button>
}

export default SaveRecipeButton

const Button = styled.button`
  background-color: #4CAF50;
  height: 40px;
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