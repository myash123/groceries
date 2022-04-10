import styled from 'styled-components'
import {useAuthValue} from './auth/authContext'
import { signOut } from 'firebase/auth' 
import { auth } from './auth/firebase'
import NavBar from './navbar'

function Account() {

  const {currentUser} = useAuthValue()

  return (
      <div>
        <NavBar />
        <Container>
          <h1>Your Account</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <Button onClick={() => signOut(auth)}>Sign Out</Button>
        </Container>
      </div>
  )
}

export default Account

const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background-color: #00cecb;
  padding: .5rem;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  font-family: Arial;
`