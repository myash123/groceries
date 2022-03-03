import styled from 'styled-components'

const SaveRecipeButton = () => {
  return(
    <form action="" method="post">
      <Button name="addToCart" value="add">Save this recipe</Button>
    </form>
    
  )
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