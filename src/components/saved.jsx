import Recipes from './recipes' 
import { useAuthValue } from './auth/authContext'

function Saved () {

  const { currentUser } = useAuthValue()

  return(
    <Recipes route={`/saved/${currentUser.uid}`}></Recipes>
  )
}

export default Saved

