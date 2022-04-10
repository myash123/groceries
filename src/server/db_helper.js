import axios from 'axios'

const queryRecipes = (route) => {
  axios.defaults.baseURL = 'http://localhost:4000'

  if(route === '/recipes')
    return new Promise((resolve) => {
      resolve(axios.get(route))
    })

  if(route.includes('/saved/')) {
    return new Promise((resolve) => {
      resolve(axios.get(route))
    }) 
  }
  
  // else {
  //   return new Promise((resolve) => {
  //     resolve(axios.get(route))
  //   })
  // }
}

export default queryRecipes