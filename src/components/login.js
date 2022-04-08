import styled from 'styled-components'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './auth/firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './auth/authContext'
import NavBar from './navbar'

function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/account')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
    <div>
      <NavBar />
      <Container>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <Input 
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <Input 
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <Button type='submit'>Login</Button>
        </form>
        <P>
          Don't have and account? 
          <span style={{"margin": ".5rem"}}><Link to='/register'>Create one here!</Link></span>
        </P>
      </Container>
    </div>
  )
}

export default Login

const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  display: block;
  padding: .5rem;
  margin: .5rem;
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
const P = styled.p`
  font-family: Arial;
`
