import styled from 'styled-components'
import SaveRecipeButton from './saveRecipeButton'

function SelectedRecipe (props) {

  const ingredients = props.recipe.ingredients
  const amazonStoreLink = props.recipe.amazonRef
  const instructions = props.recipe.instructions

  const ingredientsList = (ingredients) => {
    if(ingredients) {
      return ingredients.split(";").map( (ingredient) => 
      <li key={ingredient}>{ingredient}</li>)
    }
  }

  const instructionsList = (instructions) => {
    if(instructions) {
      return instructions.split(";").map( (instruction) => <li key={instruction}>{instruction}</li> )
    }
  }
  return (
    <Container>
        <Header>
          <h1>{props.recipe.name}</h1>
          <SaveRecipeButton recipe={props.recipe}></SaveRecipeButton>
        </Header>
        <ItemImage src={props.recipe.img} ></ItemImage>
        <p>{props.recipe.description}</p>
        <h2>Ingredients</h2>
        <IngredientList>
          {ingredientsList(ingredients)}
        </IngredientList>
        <AddToCart href={amazonStoreLink} target="_blank">Add Ingredients to Cart</AddToCart>
        <h2>Preparation</h2>
        <InstructionsList>
          {instructionsList(instructions)}
        </InstructionsList>
    </Container>
  )
}

export default SelectedRecipe

const Container = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemImage = styled.img`
  max-height: 200px;
  width: 300px;
`
const IngredientList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: -10px;
`
const InstructionsList = styled.ul`
  list-style: none;
  margin-top: -10px;  
`
const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Save = styled.a`
  background-color: #4CAF50;
  height: 25px;
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

const AddToCart = styled.a`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`