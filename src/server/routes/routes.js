const express = require("express")
const recipeModel = require("../recipe_model")
const app = express()

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

app.get("/recipes", async (request, response) => {
  const recipes = await recipeModel.find({"saved": false})

  try {
    response.send(recipes)
  } catch (error) {
    response.status(500).send(error)
  }
});

app.get("/get_saved_recipes", async (request, response) => {
  const recipes = await recipeModel.find({"saved": true})

  try {
    response.send(recipes)
  } catch (error) {
    response.status(500).send(error)
  }
});

module.exports = app