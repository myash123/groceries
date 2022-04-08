import styled from 'styled-components'
import SaveRecipeButton from './saveRecipeButton'

function SelectedRecipe (props) {

  const ingredients = props.recipe.ingredients
  const amazonStoreLink = props.recipe.amazonRef
  const instructions = props.recipe.instructions

  const ingredientsList = (ingredients) => {
    if(ingredients) {
      return ingredients.split(";").map((ingredient) => 
        <li 
          style={{"fontFamily": "Arial", "lineHeight": "1.5rem"}} 
          key={ingredient}>
            {ingredient}
        </li>)
    }
  }

  const instructionsList = (instructions) => {
    if(instructions) {
      return instructions.split(";").map( (instruction) => <li key={instruction}>{instruction}</li> )
    }
  }
  return (
    <Container>
        <SaveRecipeButton recipe={props.recipe}></SaveRecipeButton>        
        <Header>{props.recipe.name}</Header>
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
  background-color: #fffdfd;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  border: 1px solid #0d1010;
  border-radius: 30px;
`

const ItemImage = styled.img`
  max-height: 200px;
  width: 300px;
`
const IngredientList = styled.ul`
  list-style: circle;
  padding-left: 0;
  margin-top: -1rem;
  align-self: center;
  "line-height": "1.5rem"
`
const InstructionsList = styled.ol`
  margin-top: -10px;
  line-height: 2rem;
  font-family: Arial;
`
const Header = styled.h1`
  display: flex;
  justify-content: flex-start;
`
const AddToCart = styled.a`
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
`