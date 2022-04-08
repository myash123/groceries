import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Account from './components/account'
import Register from './components/register'
import VerifyEmail from './components/verifyEmail'
import Login from './components/login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './components/auth/authContext'
import {auth} from './components/auth/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './components/privateRoute'

import Recipes from './components/recipes'
import Saved from './components/saved'


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route path='/account' element={
            <PrivateRoute>
              <Account/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/verify-email' element={<VerifyEmail/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<Recipes route="/recipes" />} />
          <Route path="/saved" element={
            <PrivateRoute>
              <Saved />
            </PrivateRoute>
          }/>
        </Routes>  
      </AuthProvider>
    </Router>
  );
}

export default App