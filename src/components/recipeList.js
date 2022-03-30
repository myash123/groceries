import styled from 'styled-components'
import Recipe from './recipe'

const RecipeList = (props) => {
  return (
    <RecipeListContainer>      
      {props.recipes.map((recipe) => 
          <Recipe
            recipe={recipe}
            key={recipe._id}           
            handleClick={props.handleClick}
          ></Recipe>
      )}
    </RecipeListContainer>
  )
}

export default RecipeList

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: scroll;
  max-height: 800px;
`