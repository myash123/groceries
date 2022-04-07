import styled from 'styled-components'
import '../App.css' 

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
  border: 1px solid #0d1010;
  padding: 0 2rem 2rem 2rem;
  margin: 0 2rem 2rem 2rem;
  border-radius: 30px;
  box-shadow: 2px 2px #0d1010;
  background-color: #fffdfd;
`

const ItemImage = styled.img`
  max-height: 200px;
  width: auto;
`