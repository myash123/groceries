import Recipes from './recipes' 
import {useAuthValue} from './auth/authContext'

function Saved () {
  const {currentUser} = useAuthValue()
  console.log("asldkf" + currentUser.email)

  return(
    <Recipes route="/get_saved_recipes"></Recipes>
  )
}

export default Saved

