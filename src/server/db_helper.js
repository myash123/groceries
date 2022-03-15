import axios from 'axios'

const queryRecipes = (route) => {
  axios.defaults.baseURL = 'http://localhost:4000'
  return new Promise((resolve) => {
    resolve(axios.get(route))
  })
}

export default queryRecipes