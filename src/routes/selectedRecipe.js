import styled from 'styled-components'

const Container = styled.div`
  width: 50%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
`
const Recipe = styled.div`
`
const ItemImage = styled.img`
  max-height: 200px;
  width: 300px;
  padding-left: 10px;
`
const IngredientList = styled.ul`
  list-style-type: none;
`
const InstructionsList = styled.ul`
  list-style-type: none;
`

const SelectedRecipe = (props) => {

  const ingredients = props.recipe.ingredients

  /**Later will use format for Add To Cart API: https://www.amazon.com/gp/aws/cart/add.html
    ?ASIN.1=B07PFDYT9T
    &Quantity.1=1
    &Quantity.2=1
    &Quantity.3=1
  **/
  const amazonStoreLink = props.recipe.amazonRef
  const instructions = props.recipe.instructions

  const ingredientsList = (ingredients, amazonRef) => {
    if(ingredients) {
      return ingredients.split(";").map( (ingredient) => 
      <li 
        key={ingredient}>
          <a href={amazonStoreLink} target="_blank" >{ingredient}</a>
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
        <Recipe>
          <h1>{props.recipe.name}</h1>
          <ItemImage src={props.recipe.img} ></ItemImage>
          <p>{props.recipe.description}</p>
          <h2>Ingredients</h2>
          <IngredientList>
            {ingredientsList(ingredients)}
          </IngredientList>
          <h2>Preparation</h2>
          <InstructionsList>
            {instructionsList(instructions)}
          </InstructionsList>
        </Recipe>
    </Container>
  )
}

export default SelectedRecipe