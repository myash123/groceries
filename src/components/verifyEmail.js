import {useAuthValue} from './auth/authContext'
import {useState, useEffect} from 'react'
import {auth} from './auth/firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function VerifyEmail() {

  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  //Axios request to add new user to user table
  axios.defaults.baseURL = 'http://localhost:4000'

  const addUser = () => {

    const data = {
      "userId": currentUser.uid
    }

    console.log(data)

    axios.post("/add_user", data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
      }, 
    })
      .then(res => console.log(res))
  }


  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/account')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
    addUser()
  }, [navigate, currentUser])

  //Set timer for email verification
  // useEffect(() => {
  //   let interval = null
  //   if(timeActive && time !== 0 ){
  //     interval = setInterval(() => {
  //       setTime((time) => time - 1)
  //     }, 1000)
  //   } else if(time === 0){
  //     setTimeActive(false)
  //     setTime(60)
  //     clearInterval(interval)
  //   }
  //   return () => clearInterval(interval);
  // }, [timeActive, time, setTimeActive])

  // const resendEmailVerification = () => {
  //   sendEmailVerification(auth.currentUser)
  //   .then(() => {
  //     setTimeActive(true)
  //   }).catch((err) => {
  //     alert(err.message)
  //   })
  // }

  //TODO: give same styling as login, register pages
  return (
    <div>
      <div>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>       
        {/* <button 
          onClick={resendEmailVerification}
          disabled={timeActive}
        >Resend Email {timeActive && time}</button> */}
      </div>
    </div>
  )
}

export default VerifyEmail
