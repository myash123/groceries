const express = require("express")
const recipeModel = require("../recipe_model")
const userModel = require('../user_model')
const app = express()

//Update user's saved recipe list
app.patch("/save_recipe", async (request, response) => {
  const { userId, savedItems } = request.body

  userModel.findOneAndUpdate({"userId": userId}, { savedItems: savedItems})
  try {
    const user = await userModel.findOneAndUpdate({"userId": userId}, { savedItems: savedItems})
    response.send(user)
  } catch (error) {
    response.status(500).send(error)
    console.log(error)
  }
});

//Add new user
app.post("/add_user", async (request, response) => {

  request.body.savedItems = []
  const user = new userModel(request.body)
  try {
    await user.save()
    response.send(user)
  } catch (error) {
    response.status(500).send(error)
    console.log(error)
  }
})

//Gets recipes seen by all users
app.get("/recipes", async (request, response) => {
  const recipes = await recipeModel.find({"main_display": true})

  try {
    response.send(recipes)
  } catch (error) {
    response.status(500).send(error)
  }
});

// Gets recipes saved by authenticating user (Doesn't do this at all)
// TODO: rehaul

// app.get("/saved/:userId", async (request, response) => {
//   const recipes = await recipeModel.find({"saved": true})
//   const p = request.params
//   console.log(p)
//   try {
//     response.send(recipes)
//   } catch (error) {
//     response.status(500).send(error)
//   }
// });

app.get("/saved/:userId", async (request, response) => {
  const userId = request.params.userId
  const user = await userModel.find({"userId": userId})
  console.log(user)
  try {
    response.send(user)
  } catch (error) {
    response.status(500).send(error)
  }
});

module.exports = app