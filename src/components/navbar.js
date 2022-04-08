import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuthValue } from './auth/authContext'

function NavBar() {
  const { currentUser } = useAuthValue()

  const StyledLink = styled(Link)`
    color: #fdfefd;
    margin: .5rem .5rem 0px .5rem;
    padding: .5rem .5rem .5rem .5rem;
    text-decoration: none;
    font-family: 'Merienda', cursive;
    font-size: 1.5rem; 
  `
  return(
    <Container>
      <NavButtons>
        { 
          !currentUser ? 
            <StyledLink to='/register'>Sign up</StyledLink> :
            <StyledLink to='/account'>Account</StyledLink>
        }
        <StyledLink to='/recipes'>New recipes</StyledLink> 
        <StyledLink to='/saved'>Saved recipes</StyledLink>
      </NavButtons>
      <SocialMedia>
        <SocialMediaButton src='images/instagram.svg' />
        <SocialMediaButton src='images/facebook.svg' />
        <SocialMediaButton src='images/pinterest.svg' />
      </SocialMedia>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #00cecb;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`
const NavButtons = styled.div`
  display: flex;
`

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem;
`
const SocialMediaButton = styled.img`
  height: 2rem;
  padding: .25rem;
`