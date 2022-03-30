import styled from 'styled-components'

function Recipe (props) {
  return (
    <ListItem onClick={ () => props.handleClick(props.recipe) }>
      <h1>{props.recipe.name}</h1>
      <ItemImage src={props.recipe.img} alt="Food"></ItemImage>
      <p>{props.recipe.description}</p>
    </ListItem>
  )
}

export default Recipe

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid black;
`

const ItemImage = styled.img`
  max-height: 200px;
  width: auto;
`