import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuthValue } from './auth/authContext'
import queryRecipes from '../server/db_helper'

function SaveRecipeButton (props) {
  
  const { currentUser } = useAuthValue()

  const [getUserData, setUserData] = useState('')

  //Load user data 
  useEffect(async () => {
    setUserData('')
    const getRoute = '/saved/' + currentUser.uid
    const userData = await queryRecipes(getRoute)
    setUserData(userData.data[0]) //current user data is fetched as an array, but only contains one element (TODO: find out why)
  }, [])

  const addRecipe = () => {

    const userData = getUserData

    //Check if user has already saved this recipe
    if(userData.savedItems.includes(props.recipe._id)) {
      return 
    }

    //If user has not saved this recipe yet, save it
    userData.savedItems.push(props.recipe._id)
    axios.patch("/save_recipe", userData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
      }, 
    })
      .then(res => console.log(res))
  }  
  return <Button name="saveRecipe" value="add" onClick={addRecipe}>Save this recipe</Button>
}

export default SaveRecipeButton

const Button = styled.div`
  background-color: #fffdf1;
  border: 1px solid black;
  border-radius: 20px;
  color: 0d1010;
  padding: .75rem;
  margin: 1rem 1rem 0 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end;
`