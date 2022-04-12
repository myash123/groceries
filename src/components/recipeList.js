import styled from 'styled-components'
import Recipe from './recipe'

function RecipeList (props) {
  let list = []
  if(!Array.isArray(props.recipes)) {
    list.push(props.recipes)
  } else {
    list = props.recipes
  }
  const renderList = () => {
    try {
      if(!list) {
        return <div>No saved recipes yet</div>
      }
      return (
        <RecipeListContainer>      
          {
            list.map((recipe) => 
              <Recipe
                recipe={recipe}
                key={recipe._id}           
                handleClick={props.handleClick}
              ></Recipe>
            )
          }
        </RecipeListContainer>
        )
    } catch(e) {
      console.log(e)
    }
  }
  return (
  <RecipeListContainer>      
    {
      renderList()
    }
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