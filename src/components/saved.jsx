import Recipes from './recipes' 
import { useState, useEffect } from 'react'
import { useAuthValue } from './auth/authContext'
import queryRecipes from '../server/db_helper'

function Saved () {

  const { currentUser } = useAuthValue()

  const [userRecipeData, setUserRecipeData] = useState('')

  //Load user data 
  useEffect(async () => {
    setUserRecipeData('')
    const getRoute = '/saved/' + currentUser.uid
    const userData = await queryRecipes(getRoute)
    const query = userData.data[0].savedItems.join('&recipe=')
    setUserRecipeData(query) //current user data is fetched as an array, but only contains one element (TODO: find out why)
  }, [])

  return(
    <Recipes route={`/recipes/user/?recipe=${userRecipeData}`}></Recipes>
  )
}

export default Saved

