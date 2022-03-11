import axios from 'axios'

const queryRecipes = () => {
  axios.defaults.baseURL = 'http://localhost:4000'
  return new Promise((resolve) => {
    resolve(axios.get('/recipes'))
  })
}

export default queryRecipes