const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    amazon_reference: {
        type: String
    },
    description: {
        type: String
    },
    ingredients: {
      type: String
    },
    instructions: {
      type: String
    },
})

const Recipe = mongoose.model("Recipe", RecipeSchema)
module.exports = Recipe