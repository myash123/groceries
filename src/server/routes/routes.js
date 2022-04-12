const express = require("express")
const recipeModel = require("../recipe_model")
const userModel = require('../user_model');
const mongoose = require("mongoose")

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

//Save new user
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

//Returns recipes seen by all
app.get("/recipes", async (request, response) => {
  const recipes = await recipeModel.find({"main_display": true})

  try {
    response.send(recipes)
  } catch (error) {
    response.status(500).send(error)
  }
});

//FIX: this route is getting called twice. 
app.get("/recipes/user", async (request, response) => {

  //TODO: Find how to use findById (some kind of IN operator)
  let ids = request.query.recipe
  console.log(ids)
  const recipes = await recipeModel.find({ '_id': { $in: ids } });

  // const recipes = await recipeModel.findByIds(ids)

  try {
    response.send(recipes)
  } catch (error) {
    response.status(500).send(error)
  }
});

//Returns document associated with userId from User collection 
app.get("/saved/:userId", async (request, response) => {
  const userId = request.params.userId
  const user = await userModel.find({"userId": userId})
  try {
    response.send(user)
  } catch (error) {
    response.status(500).send(error)
  }
});

module.exports = app
