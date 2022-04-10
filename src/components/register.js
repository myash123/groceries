import styled from 'styled-components'
import {useState} from 'react'
import {auth} from './auth/firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from './auth/authContext'
import NavBar from './navbar'

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive, currentUser} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Register</h1>
        {error && <div>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <Input 
            type='email' 
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}/>

          <Input 
            type='password'
            value={password} 
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <Input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>

            <Button type='submit'>Sign up!</Button>

        </form>
        <P>
          Already have an account? 
          <span style={{"margin": ".5rem"}}><Link to='/login'>Login!</Link></span>
        </P>
      </Container>
    </div>
  )
}

export default Register

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
