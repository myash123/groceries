import {Navigate} from 'react-router-dom'
import {useAuthValue} from './auth/authContext'

function PrivateRoute({children}) {

  const {currentUser} = useAuthValue()

  console.log(currentUser?.emailVerified)

  if(!currentUser?.emailVerified){
    return <Navigate to='/login' replace/>
  }

  return children
}

export default PrivateRoute