import {useAuthValue} from './auth/authContext'
import { signOut } from 'firebase/auth' 
import { auth } from './auth/firebase'
import { Link } from 'react-router-dom'

function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div>
        <div>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
          <Link to='/saved'>See your recipes</Link>
        </div>
      </div>
  )
}

export default Profile