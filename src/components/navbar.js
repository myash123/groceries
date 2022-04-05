import styled from 'styled-components'
import { Link } from 'react-router-dom'

function NavBar() {
  return(
    <Container>
      <Link to='/saved'>See your recipes</Link> __
      <Link to='/recipes'>See our recipes</Link> __
      <Link to='/register'>Sign up</Link> __
      <p>test hello</p>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 200px;
  width: 100%;
`