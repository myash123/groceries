const express = require("express")
const recipeModel = require("../recipe_model")
const app = express()

//Saves recipe to user's own recipe database if that same recipe has not already been saved 
app.post("/save_recipe", async (request, response) => {
  const duplicateCheck = await recipeModel.find({ "saved": true, name: request.body.name })

  if(duplicateCheck.length < 1) {
    console.log(duplicateCheck)
   
    const recipe = new recipeModel(request.body)

    try {
      await recipe.save()
      response.send(recipe)
    } catch (error) {
      response.status(500).send(error)
      console.log(error)
    }
  }
});

//Gets recipes seen by all users
app.get("/recipes", async (request, response) => {
  const recipes = await recipeModel.find({"main_display": true})

  try {
    response.send(recipes)
  } catch (error) {
    response.status(500).send(error)
  }
});

//Gets recipes saved by authenticating user
app.get("/saved/:userId", async (request, response) => {
  const recipes = await recipeModel.find({"saved": true})
  const p = request.params
  console.log(p)
  try {
    response.send(recipes)
  } catch (error) {
    response.status(500).send(error)
  }
});

module.exports = app